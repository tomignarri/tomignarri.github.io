import React from 'react';
import { useEffect } from 'react';
import { useRapier, RigidBody, Physics } from '@react-three/rapier'

const Background = () => {
    
    const SetZGravity = () => {
        const { world } = useRapier();
      
  
        useEffect(() => {
            world.gravity = { x: 0, y: 0, z: 9.81 }
        }, [world])
      
        return null;
    }

    return <>
        <Physics>
            <SetZGravity />

            <RigidBody>
                <mesh castShadow position={ [ - 2, 2, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed">
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>
    </>
};

export default Background;
