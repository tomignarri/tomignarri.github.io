import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

// get states of pan position

export default function Zoom()
{
    const { camera } = useThree();

    useEffect(() => {
        const handleScroll = (e) => {
            camera.zoom += e.deltaY * -0.1
            camera.zoom = Math.max(30, Math.min(300, camera.zoom))
            camera.updateProjectionMatrix()
        }
        
        window.addEventListener('wheel', handleScroll)
        
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    return null;
}