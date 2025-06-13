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
            if (btn) btn.removeEventListener('click', handleClick);
        };
    }, []);

    useFrame(() => {
        if ((camera.zoom > 30 || camera.position.x !== 0 || camera.position.z !== 0) && viewAllStarted) {
            // Zoom with clamping
            camera.zoom = Math.max(30, camera.zoom - 1);

            // Easing position
            camera.position.x *= 0.9;
            camera.position.z *= 0.9;

            // Clamping to zero
            if (Math.abs(camera.position.x) < 0.01) camera.position.x = 0;
            if (Math.abs(camera.position.z) < 0.01) camera.position.z = 0;

            camera.updateProjectionMatrix();
        } else if (viewAllStarted) {
            viewAllStarted = false;
        }
    });

    return null;
}
