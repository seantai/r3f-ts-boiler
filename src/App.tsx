import { Suspense } from 'react';
import { CameraStuff } from './components/CameraStuff';
import { CanvasWrapper } from './components/CanvasWrapper';
import { Knot } from './components/Knot';
import { Loader } from './components/Loader';

const Scene = () => {
  return (
    <>
      <Suspense>
        <Knot />
        <Loader />
      </Suspense>

      <CameraStuff />
    </>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>
    </div>
  );
}
