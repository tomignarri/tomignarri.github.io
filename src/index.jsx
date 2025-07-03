import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import './main.scss';
import Experience from './Experience.jsx';
import PanIntro from './PanIntro.jsx';
import ZoomIntro from './ZoomIntro.jsx';
import { store } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

function App() {
  const [introPartDone, setIntroPartDone] = useState(false);

  return (
    <>
      <nav id="top-nav">
        <button>About me.</button>
        <article>
          <h1>Hello</h1>
          <p>My name is Tom Ignarri. I'm a developer based in Philadelphia, PA.</p>
        </article>
      </nav>

      <nav id="bottom-nav">
        <button id="full-zoom-out">View all</button>
      </nav>

      <section className="intro-container">
        <ZoomIntro introPartDone={introPartDone} setIntroPartDone={setIntroPartDone} />
        <PanIntro introPartDone={introPartDone} setIntroPartDone={setIntroPartDone} />
      </section>

        <Canvas
          className="r3f"
          orthographic
          shadows
          dpr={[1, 2]} 
          gl={{ antialias: false }}
          camera={{
            fov: 45,
            zoom: 20,
            near: -10,
            far: 1000,
            position: [0, 10, 0],
          }}
        >
        
        <Experience />
      </Canvas>
    </>
  );
}

root.render(<App />);
