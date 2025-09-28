import { useRef } from 'react';
import { CameraControls, PerspectiveCamera } from '@react-three/drei';

export const CameraStuff = () => {
  const controlsRef = useRef<CameraControls>(null);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 2, 8]}
        fov={34}
        near={0.001}
      />
      <CameraControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.5}
      />
    </>
  );
};
