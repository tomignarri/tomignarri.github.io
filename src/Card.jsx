import { Html } from '@react-three/drei'
import { store } from './store';
import { useEffect } from 'react'

export default function Card({ title, techUsed, position, links, content })
{

    useEffect(() => {
        const portfolioVideos = document.querySelectorAll('.card video')

        portfolioVideos.forEach((video) => {
            video.play().catch((error) => {
                console.log('Autoplay failed:', error);
            });
        });
    }, [])
    


    return <>
        <mesh
            position={position}
            castShadow
            receiveShadow
        >

            <boxGeometry
                args={[12, 10, 1]}
            />
            <meshStandardMaterial color={store.cardColor} />
            <Html 
                position={[0, 0, 0.6]} 
                transform
                rotation={[0, 0, 0]}
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