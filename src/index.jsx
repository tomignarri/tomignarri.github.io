import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import "./main.scss";
import Experience from "./Experience.jsx";
import Card from "./Card.jsx";
import { store } from "./store";

const root = ReactDOM.createRoot(document.querySelector("#root"));


function App() {

  const {csl, neurocrine, arcutis, cooper, iperbot} = store;

  const clients = [csl, neurocrine, arcutis, cooper, iperbot];

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
