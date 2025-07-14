import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Object from "./Object";

export default function Objects() {
  const [objects, setObjects] = useState([]);
  const frameCount = useRef(0);

  useFrame(() => {
    frameCount.current++;

    if ((frameCount.current % 40 === 0) && frameCount.current < 500) {
      setObjects((prev) => [...prev, prev.length]);
    }
  });

  return (
    <>
      {objects.map((i) => (
        <Object key={i} />
      ))}
    </>
  );
}
