import { memo } from "react";

const Object = ({position}) => {

  const [x, y] = position;

  return (
      <mesh castShadow position={[x, y, 0.25]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="white"  
        />
      </mesh>
  );
};

export default memo(Object);
