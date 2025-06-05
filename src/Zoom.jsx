import { useEffect } from 'react'



export default function Zoom()
{
    useEffect(() => {
        const handleScroll = (e) => {
            console.log(e.deltaY)
        }
        
        window.addEventListener('wheel', handleScroll)
        
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    return null;
}