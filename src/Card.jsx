import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Card({ content })
{

    return <>

        <mesh
            position={[0, 3, 0]}
        >
            <boxGeometry
                args={[2, 1, 3]}
            />
            <meshBasicMaterial color="#f0eee9" />
            <Html 
                position={[0, 0.6, 0]} 
                transform
                rotation={[Math.PI / 2, 0, 0]}
            >
                <div style={{ background: 'red', padding: '6px', borderRadius: '6px', fontSize: '14px' }}>
                    <strong>Mesh Label</strong><br />
                </div>
            </Html>
        </mesh>
        
    </>
}