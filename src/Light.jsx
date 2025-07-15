import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Light = () => {
  const lightRef = useRef();
  const { camera, size } = useThree();
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert screen coords to NDC (-1 to 1)
      mouse.current.x = (event.clientX / size.width) * 2 - 1;
      mouse.current.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (lightRef.current) {
      const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
      vector.unproject(camera); // Convert NDC to world position

      // Optional: lock to XY plane by setting z = fixed value
      vector.z = 1;

      lightRef.current.position.lerp(vector, 0.2); // Smooth follow
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 2]}
        intensity={1}
        castShadow
        color="white"
      />
      <ambientLight intensity={0} color="white" />
    </>
  );
};

export default Light;
