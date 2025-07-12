import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import "./main.scss";
import Experience from "./Experience.jsx";
import Card from "./Card.jsx";
import PanIntro from "./PanIntro.jsx";
import ZoomIntro from "./ZoomIntro.jsx";
import { store } from "./store";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Scene() {
  return (
    <>
      {/* Axis Helper (X=Red, Y=Green, Z=Blue) */}
      <primitive object={new THREE.AxesHelper(5)} />

      {/* A simple cube */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
    </>
  );
}

function App() {
  const [introPartDone, setIntroPartDone] = useState(false);

  const { iperbot, csl, arcutis, neurocrine, cooper } = store;

  return (
    <>
      <nav id="top-nav">
        <button>Neurocrine</button>
        <button>CSL Behring</button>
        <button>Arcutis</button>
        <button>Cooper</button>
        <button>Iperbot</button>
      </nav>

      <div id="all-cards-container">
        <Card
          title="ARCUTIS"
          techUsed="Javascript, HTML, SCSS, Drupal, React, PHP"
          content={arcutis.content}
          links={arcutis.links}
        />
        <Card
          title="Arcutis"
          techUsed="Javascript, HTML, SCSS, Drupal, React, PHP"
          content={arcutis.content}
          links={arcutis.links}
        />
      </div>

      {/* <nav id="bottom-nav">
        <button id="full-zoom-out">View all</button>
      </nav> */}

      {/* <section className="intro-container">
        <ZoomIntro introPartDone={introPartDone} setIntroPartDone={setIntroPartDone} />
        <PanIntro introPartDone={introPartDone} setIntroPartDone={setIntroPartDone} />
      </section> */}

      <Canvas
        className="r3f"
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, 48],
        }}
      >
        {/* <Scene /> */}

        <Experience />
      </Canvas>
    </>
  );
}

root.render(<App />);
