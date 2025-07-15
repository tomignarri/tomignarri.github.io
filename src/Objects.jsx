import { useEffect, useMemo } from "react";
import Object from "./Object";

export default function Objects() {
  const positions = useMemo(() => {
    const pos = [];
    for (let x = 0; x < 40; x++) {
      for (let y = 0; y < 40; y++) {
        pos.push([x, y]);
        if (!(x === 0 && y === 0)) {
          pos.push([-x, y]);
          pos.push([x, -y]);
          pos.push([-x, -y]);
        }
      }
    }

    return pos;
  }, []);


  return (
    <>
      {positions.map((position, i) => (
        <Object key={i} position={position} />
      ))}
    </>
  );
}
