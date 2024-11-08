import { CameraControls } from '@react-three/drei';
import { Suspense } from 'react';
import { CanvasWrapper } from './components/CanvasWrapper';
import { Knot } from './components/Knot';
import { Loader } from './components/Loader';
// import { Perf } from 'r3f-perf';

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Knot />
        <Loader />
      </Suspense>

      <CameraControls
        makeDefault
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.5}
      />
      {/* <Perf /> */}
    </>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen font-inter">
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>
    </div>
  );
}
