import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber"; // Rename the imported Canvas component
import { Environment, Center, Backdrop } from "@react-three/drei";
import CameraRig from "./CameraRig";
import BackDrop from "../canvas/BackDrop";
import Shirt from "./Shirt";

const CustomCanvas = () => {
  return (
    <ThreeCanvas
      Shadows
      camera={{ potion: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <BackDrop></BackDrop>
        <Center>
          <Shirt></Shirt>
        </Center>
      </CameraRig>
    </ThreeCanvas>
  );
};

export default CustomCanvas;
