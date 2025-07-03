import React from 'react';
import { useEffect } from 'react';
import { useRapier, RigidBody, Physics, CuboidCollider } from '@react-three/rapier'
import Objects from './Objects';

const Background = () => {


    const depth = 10;
    
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

            {/* floor */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, 0.5, depth]} position={[0, -15, 0]} />
            </RigidBody>

            {/* walls by width */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, 15, 0.5]} position={[0, 0, depth / 2]} />
            </RigidBody>
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, 15, 0.5]} position={[0, 0, -depth / 2]} />
            </RigidBody>

            {/* walls by depth */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[0.5, 15, depth]} position={[30, 0, 5]} />
            </RigidBody>
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[0.5, 15, depth]} position={[-30, 0, -5]} />
            </RigidBody>
        </Physics>
};

export default Background;
