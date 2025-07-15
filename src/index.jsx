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

  const {csl, neurocrine, arcutis, cooper, iperbot} = store;

  const clients = [csl, neurocrine, arcutis, cooper, iperbot];

  const viewSize = 10;
  const aspect = window.innerWidth / window.innerHeight;

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
        {clients.map((client, i) => (
          <Card
            key={i}
            title={client.title}
            techUsed={client.techUsed}
            content={client.content}
            links={client.links}
          />
        ))}
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
        orthographic
        camera={{
          zoom: 5,
          near: 0.1,
          far: 1000,
          position: [0, 0, 20],
        }}
      >
        {/* <Scene /> */}

        <Experience />
      </Canvas>
    </>
  );
}

root.render(<App />);
