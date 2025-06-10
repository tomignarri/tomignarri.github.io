import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

// get states of pan position

export default function Pan()
{
    const { camera } = useThree();

    useEffect(() => {
        let isDragging = false;

        let prevFrame = {
            x: undefined,
            y: undefined
        };


        const handleDrag = (e) => {
            if(isDragging) {
                const currentX = e.clientX / 100;
                const currentY = e.clientY / 100;
        
                const deltaX = currentX - prevFrame.x;
                const deltaY = currentY - prevFrame.y;
        
                camera.position.x -= deltaX;
                camera.position.z -= deltaY;
        
                prevFrame.x = currentX;
                prevFrame.y = currentY;
            }
        }
        

        window.addEventListener('mousedown', (e) => {
            prevFrame.x = e.clientX / 100;
            prevFrame.y = e.clientY / 100;
            isDragging = true;
        })
        window.addEventListener('mousemove', handleDrag)
        window.addEventListener('mouseup', () => { isDragging = false })
        

        return () => {
            window.removeEventListener('mousedown', () => { isDragging = true })
            window.removeEventListener('mousemove', handleDrag)
            window.removeEventListener('mouseup', () => { isDragging = false })
        }
    }, [])

    return null;
}