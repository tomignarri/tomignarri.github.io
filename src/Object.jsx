import { RigidBody } from '@react-three/rapier'
import { memo } from 'react'


const Object = () => {

    const xPosition = Math.floor(Math.random() * (28 - -28) + -28);
    const yPosition = Math.floor(Math.random() * (2 - -2) + -2);

    return <RigidBody>
        <mesh castShadow position={ [xPosition, 0, 0] }>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="white" />
        </mesh>
    </RigidBody>
};

export default memo(Object);