import { useCallback, useEffect, useRef, useState } from 'react';

interface UseResponsiveScaleOptions {
  baseWidth?: number;
  minScale?: number;
  maxScale?: number;
  debounceMs?: number;
}

interface UseResponsiveScaleReturn {
  scale: number;
  width: number;
  height: number;
}

/**
 * Hook for responsive scaling based on window dimensions
 * @param options Configuration options for the responsive scale
 * @returns Object containing scale factor and current dimensions
 */
export function useResponsiveScale({
  baseWidth = 1300,
  minScale = 0.5,
  maxScale = 1.2,
  debounceMs = 50
}: UseResponsiveScaleOptions = {}): UseResponsiveScaleReturn {
  const [size, setSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateSize = useCallback(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  const handleResize = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(updateSize, debounceMs);
  }, [updateSize, debounceMs]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    updateSize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize, updateSize]);

  const scale = Math.min(Math.max(size[0] / baseWidth, minScale), maxScale);

  return {
    scale,
    width: size[0],
    height: size[1]
  };
}
