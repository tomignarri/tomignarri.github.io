import { OrbitControls, Environment } from "@react-three/drei";
import { MathUtils } from "three";
import Zoom from "./Zoom.jsx";
import Pan from "./Pan.jsx";
import ViewAll from "./ViewAll.jsx";

import Objects from "./Objects.jsx";
import Light from "./Light.jsx"
import Background from "./Background.jsx";
import { store } from "./store";
import { useState, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import * as THREE from "three";
import { isPointInPyramid } from "./geometryUtils";

export default function Experience() {
  const { camera } = useThree();
  const controls = useRef();

  const lastValidPosition = useRef(camera.position.clone());
  const lastValidTarget = useRef(new THREE.Vector3(0, 0, 0));

  const clamp = () => {
    if (isPointInPyramid(camera.position)) {
      centerOnZoom();
      lastValidPosition.current.copy(camera.position);
      lastValidTarget.current.copy(controls.current.target);
    } else {
      camera.position.copy(lastValidPosition.current);
      controls.current.target.copy(lastValidTarget.current);
      controls.current.update();
    }
  };

  const centerOnZoom = () => {
    const currentZ = camera.position.z;
    const previousZ = lastValidPosition.current.z;

    if (currentZ > previousZ) {
      const damping = 0.05;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, damping);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, damping);

      controls.current.target.x = THREE.MathUtils.lerp(
        controls.current.target.x,
        0,
        damping
      );
      controls.current.target.y = THREE.MathUtils.lerp(
        controls.current.target.y,
        0,
        damping
      );

      lastValidPosition.current.copy(camera.position);
      lastValidTarget.current.copy(controls.current.target);

      controls.current.update();
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // const topNavButton = document.querySelector("#top-nav button");
  // const topNav = document.querySelector("#top-nav");
  // const aboutContent = document.querySelector("#top-nav article");
  // let topNavOpen = false;

  // const toggleTopNav = () => {
  //   if (!topNavOpen) {
  //     aboutContent.style.display = "block";
  //     topNavOpen = true;
  //   } else {
  //     aboutContent.style.display = "none";
  //     topNavOpen = false;
  //   }
  // };

  // topNavButton.addEventListener("click", toggleTopNav);
  // topNavButton.addEventListener("touch", toggleTopNav);

  const dtPositions = {
    arcutis: [-15, -6, store.cardDepth],
    csl: [0, -6, store.cardDepth],
    neuro: [0, 6, store.cardDepth],
    cooper: [-15, 6, store.cardDepth],
    iper: [15, 6, store.cardDepth],
  };

  const mbPositions = {
    arcutis: [0, -8, store.cardDepth],
    csl: [0, 0, store.cardDepth],
    neuro: [0, 8, store.cardDepth],
    cooper: [0, 16, store.cardDepth],
    iper: [0, 24, store.cardDepth],
  };

  const myCardPositions = isMobile ? mbPositions : dtPositions;

  return (
    <>
      <color args={[store.expBackgroundColor]} attach="background" />

      {/* <Objects /> */}

      <Light />

      <Background />


      {/* <OrbitControls
        ref={controls}
        zoomSpeed={0.7}
        panSpeed={0.7}
        target={[0, 0, 0]}
      /> */}

      {/* <mesh receiveShadow>
        <planeGeometry args={[100, 100]}/>
        <meshStandardMaterial color="white" side={2} />
      </mesh> */}




    </>
  );
}
