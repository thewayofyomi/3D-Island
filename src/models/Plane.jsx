import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import placeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(placeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if(isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
