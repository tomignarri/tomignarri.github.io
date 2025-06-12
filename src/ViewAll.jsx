import { useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'

export default function ViewAll() {
    const { camera } = useThree();
    let viewAllStarted = false;

    useEffect(() => {

        const handleClick = () => {
            viewAllStarted = true;
        };

        const btn = document.getElementById('full-zoom-out');
        btn.addEventListener('click', handleClick);


        return () => {
            console.log('♻️ Cleaning up event listener');
            if (btn) btn.removeEventListener('click', handleClick);
        };
    }, []);

    useFrame(() => {
        console.log(camera.position.x)
        console.log(camera.position.z)
        if (camera.zoom >= 30 && camera.position.x === 0 && camera.position.z === 0 && viewAllStarted) {
            camera.zoom -= 1;
            camera.position.x -= Math.sign(camera.position.x) * 0.1;
            camera.position.z -= Math.sign(camera.position.z) * 0.1;
            console.log('🔍 Zooming out: new camera.zoom =', camera.zoom);
            camera.updateProjectionMatrix()
        } else if (viewAllStarted) {
            viewAllStarted = false;
        }
    });

    return null;
}
