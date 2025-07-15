import React, { useMemo } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";

const Background = () => {
  const simplex = new SimplexNoise();

  const geometry = useMemo(() => {
    const simplex = new SimplexNoise();
    const plane = new THREE.PlaneGeometry(800, 500, 600, 600);
    const position = plane.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      const noise = simplex.noise(x * 0.03, y * 0.03);
      position.setZ(i, noise * 3);
    }

    position.needsUpdate = true;
    plane.computeVertexNormals();

    return plane;
  }, []);

  return (
    <>
      <mesh
        geometry={geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial color="white" flatShading />
      </mesh>
    </>
  );
};

export default Background;
