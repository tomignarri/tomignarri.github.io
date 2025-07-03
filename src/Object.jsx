import React from 'react';
import { RigidBody } from '@react-three/rapier'


export default function Object({ position }) {

    return <RigidBody>
        <mesh castShadow position={ position }>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="white" />
        </mesh>
    </RigidBody>
};