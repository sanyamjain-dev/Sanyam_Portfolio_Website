import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useInView } from "react-intersection-observer";

const Ball = ({ imgUrl }) => {
  // Early exit if invalid or undefined
  if (!imgUrl || typeof imgUrl !== "string") return null;

  let decal;
  try {
    [decal] = useTexture([imgUrl]);
  } catch (error) {
    console.warn("Texture load failed:", imgUrl);
    return null;
  }

  if (!decal) return null;

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.6}>
        {/* Prevent NaN geometry */}
        <icosahedronGeometry args={[1, 1]} attach="geometry" />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]} // stable rotation
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      frameloop={isMobile ? "always" : "demand"}
      dpr={isMobile ? [1] : [1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ touchAction: "none" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export const LazyBallCanvas = ({ icon }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="w-28 h-28">
      {inView && <BallCanvas icon={icon} />}
    </div>
  );
};

export default BallCanvas;
