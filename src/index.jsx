import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import "./main.scss";
import Experience from "./Experience.jsx";
import Ui from "./Ui.jsx"


import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {





  return (
    <>
      <Ui />

      <Canvas
        className="r3f"
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        orthographic
        camera={{
          zoom: 5,
          near: 0.1,
          far: 1000,
          position: [0, 0, 20],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

root.render(<App />);
