import { Bvh } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion as m } from 'motion/react';
import React from 'react';

import { useSceneLoadedStore } from '../store';

export const CanvasWrapper = ({
  children,
  canvasProps = {}
}: {
  children: React.ReactNode;
  canvasProps?: Partial<React.ComponentProps<typeof Canvas>>;
}) => {
  const { isSceneLoaded } = useSceneLoadedStore();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isSceneLoaded ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.26, 0.05, 0.25, 1] }}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full overflow-hidden">
      <Canvas
        {...canvasProps}
        eventSource={document.getElementById('root')!}
        eventPrefix="client">
        <Bvh firstHitOnly>{children}</Bvh>
      </Canvas>
    </m.div>
  );
};
