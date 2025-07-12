import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { store } from './store';


export default function Zoom()
{
    const { camera } = useThree();

    useEffect(() => {
        const handleScroll = (e) => {
            camera.position.y += e.deltaY * -0.1
            camera.position.y = Math.max(store.maxYCamera, Math.min(store.minYCamera, camera.position.y))
            camera.updateProjectionMatrix()
        }

        window.addEventListener('wheel', handleScroll)
        
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    return null;
}