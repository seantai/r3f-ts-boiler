import { CanvasWrapper } from './components/CanvasWrapper';
import { CameraControls } from '@react-three/drei';
import { Knot } from './components/Knot';
// import { Perf } from 'r3f-perf';

const Scene = () => {
  return (
    <>
      <Knot />
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
