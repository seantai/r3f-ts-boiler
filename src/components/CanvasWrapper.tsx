import { Bvh, useProgress } from '@react-three/drei';
import { Canvas, CanvasProps } from '@react-three/fiber';
import { motion as fm } from 'framer-motion';

export const CanvasWrapper = ({
  children,
  canvasProps = {}
}: {
  children: React.ReactNode;
  canvasProps?: Partial<CanvasProps>;
}) => {
  const { loaded } = useProgress();

  return (
    <fm.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.26, 0.05, 0.25, 1] }}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full overflow-hidden">
      <Canvas
        camera={{
          position: [0, 2, 8],
          fov: 34,
          near: 0.001
        }}
        {...canvasProps}
        eventSource={document.getElementById('root')!}
        eventPrefix="client">
        <Bvh firstHitOnly>{children}</Bvh>
      </Canvas>
    </fm.div>
  );
};
