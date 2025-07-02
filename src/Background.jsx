import React from 'react';
import { useEffect } from 'react';
import { useRapier, RigidBody, Physics, CuboidCollider } from '@react-three/rapier'
import Objects from './Objects';

const Background = () => {
    
    const SetZGravity = () => {
        const { world } = useRapier();
      
  
        useEffect(() => {
            world.gravity = { x: 0, y: 0, z: 9.81 }
        }, [world])
      
        return null;
    }

    return <Physics debug>
            <SetZGravity />

            <Objects />

            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[100, 0.5, 30]} position={[0, -15, 0]} />
            </RigidBody>
        </Physics>
};

export default Background;
