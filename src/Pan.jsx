import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export default function Pan()
{
    const { camera } = useThree();

    useEffect(() => {
        let isDragging = false;

        let prevFrame = {
            x: undefined,
            y: undefined
        };

        const getCursorPosition = (e) => {
            if (e.touches && e.touches.length > 0) {
                return {
                    x: e.touches[0].clientX / 100,
                    y: e.touches[0].clientY / 100
                };
            } else {
                return {
                    x: e.clientX / 100,
                    y: e.clientY / 100
                };
            }
        };


        const handleDrag = (e) => {
            if (!isDragging) return;

            const { x, y } = getCursorPosition(e);

            // How far did cursor move from one frame to the next
            const deltaX = x - prevFrame.x;
            const deltaY = y - prevFrame.y;
            
            
            camera.position.x -= deltaX;
            camera.position.z -= deltaY;
        
            prevFrame.x = x;
            prevFrame.y = y;
        }

        const startPan = (e) => {
            const { x, y } = getCursorPosition(e);
            prevFrame.x = x;
            prevFrame.y = y;
            isDragging = true;
        }
        

        window.addEventListener('mousedown', startPan);
        window.addEventListener("touchstart", startPan);

        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('touchmove', handleDrag);


        window.addEventListener('mouseup', () => { isDragging = false });
        window.addEventListener('touchend', () => { isDragging = false });
        

        return () => {
            window.removeEventListener('mousedown', startPan);
            window.removeEventListener('touchstart', startPan);

            window.removeEventListener('mousemove', handleDrag)
            window.removeEventListener('touchmove', handleDrag)

            window.removeEventListener('mouseup', () => { isDragging = false });
            window.removeEventListener('touchend', () => { isDragging = false });
        }
    }, [])

    return null;
}