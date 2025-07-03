import React from 'react';
import { useEffect } from 'react';
import { useRapier, RigidBody, Physics, CuboidCollider } from '@react-three/rapier'
import Objects from './Objects';

const Background = () => {

    // Collider dimensions
    const depth = 10;
    const height = 20;
    
    const SetZGravity = () => {
        const { world } = useRapier();
      
  
        useEffect(() => {
            world.gravity = { x: 0, y: 0, z: 9.81 }
        }, [world])
      
        return null;
    }

    return <Physics>
            <SetZGravity />

            <Objects />

            {/* floor */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, 0.5, depth]} position={[0, -height, 0]} />
            </RigidBody>

            {/* walls by width */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, height, 0.5]} position={[0, 0, depth / 2]} />
            </RigidBody>
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[30, height, 0.5]} position={[0, 0, -depth / 2]} />
            </RigidBody>

            {/* walls by depth */}
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[0.5, height, depth]} position={[30, 0, 5]} />
            </RigidBody>
            <RigidBody rotation={[-Math.PI / 2, 0, 0]} type="fixed">
                <CuboidCollider args={[0.5, height, depth]} position={[-30, 0, -5]} />
            </RigidBody>
        </Physics>
};

export default Background;
