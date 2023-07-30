import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  shaderMaterial,
} from "@react-three/drei";

const Backdrop = () => {
  return (
    <AccumulativeShadows
      // ref={"shadows"}
      temporal
      frames={60}
      alphaTest={0.85}
      scae
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.45}
        ambient={0.3}
        position={[6, 6, -10]}
      />
      {/* <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      /> */}
    </AccumulativeShadows>
  );
};

export default Backdrop;
