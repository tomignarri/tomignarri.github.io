import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Object from "./Object";

export default function Objects() {
  const [objects, setObjects] = useState([]);
  const frameCount = useRef(0);
  const xPosition = Math.floor(Math.random() * (28 - -28) + -28);
  const yPosition = Math.floor(Math.random() * (2 - -2) + -2);

  const position = [xPosition, 0, 0];

  useFrame(() => {
    frameCount.current++;

    if (frameCount.current % 40 === 0) {
      setObjects((prev) => [...prev, prev.length]);
    }
  });

  return (
    <>
      {objects.map((i) => (
        <Object key={i} index={i} position={position} />
      ))}
    </>
  );
}
