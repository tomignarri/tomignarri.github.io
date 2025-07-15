import { OrbitControls, Environment } from "@react-three/drei";
import Light from "./Light.jsx"
import Background from "./Background.jsx";
import { store } from "./store";
import { useState } from "react";

export default function Experience() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);



  return (
    <>
      <color args={[store.expBackgroundColor]} attach="background" />

      <Light />

      <Background />

      {/* <OrbitControls
        ref={controls}
        zoomSpeed={0.7}
        panSpeed={0.7}
        target={[0, 0, 0]}
      /> */}






    </>
  );
}
