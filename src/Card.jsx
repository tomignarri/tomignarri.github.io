import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { store } from './store';

export default function Card({ content, position })
{

    return <>

        <mesh
            position={position}
        >
            <boxGeometry
                args={[8, 1, 10]}
            />
            <meshBasicMaterial color={store.cardColor} />
            <Html 
                position={[0, 0.6, 0]} 
                transform
                rotation={[-Math.PI / 2, 0, 0]}
            >
                {content}
            </Html>
        </mesh>
        
    </>
}