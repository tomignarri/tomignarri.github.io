import React from 'react';
import { RigidBody } from '@react-three/rapier'


export default function Object() {

    return <RigidBody>
        <mesh castShadow position={ [ 0, 0, 0 ] }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    </RigidBody>
};