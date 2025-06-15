import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { store } from './store';


export default function Zoom()
{
    const { camera } = useThree();

    useEffect(() => {
        const handleScroll = (e) => {
            camera.zoom += e.deltaY * -0.1
            camera.zoom = Math.max(store.maxZoom, Math.min(store.minZoom, camera.zoom))
            camera.updateProjectionMatrix()
        }


        window.addEventListener('wheel', handleScroll)
        
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    return null;
}