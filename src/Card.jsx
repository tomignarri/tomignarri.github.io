import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { store } from './store';

export default function Card({ title, techUsed, position, links, content })
{

    return <>

        <mesh
            position={position}
        >
            <boxGeometry
                args={[12, 1, 10]}
            />
            <meshBasicMaterial color={store.cardColor} />
            <Html 
                position={[0, 0.6, 0]} 
                transform
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <section class="card">
                    <h1>{title}</h1>
                    <h3>{techUsed}</h3>
                    <aside>{links}</aside>
                    {content}
                    <div className='card-hover-container'>
                        <h1></h1>
                    </div>
                </section>
            </Html>
        </mesh>
        
    </>
}