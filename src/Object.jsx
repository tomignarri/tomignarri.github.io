import { memo } from "react";

const Object = ({position}) => {

  const [x, y] = position;

  return (
      <mesh castShadow position={[x, y, 0.25]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="gray"
          roughness={1}     // 1 = very matte
          metalness={0}   
        />
      </mesh>
  );
};

export default memo(Object);
