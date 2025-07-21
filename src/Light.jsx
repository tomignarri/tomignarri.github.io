import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Light = () => {
  const lightRef = useRef();
  const { camera, size } = useThree();
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {

    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / size.width) * 2 - 1;
      mouse.current.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (lightRef.current) {
      const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 5);
      vector.unproject(camera);

      vector.z = 5;

      lightRef.current.position.lerp(vector, 0.2);
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 5]}
        intensity={10}
        castShadow
        decay={1}
        color="white"
      />
      <ambientLight intensity={0.1} color="white" />
    </>
  );
};

export default Light;
