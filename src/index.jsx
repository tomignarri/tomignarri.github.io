import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Card from './Card.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        className="r3f"
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ 0, 0, 0 ]
        } }
    >
        <Experience />
        <gridHelper args={[10, 10]} />
     
    </Canvas>
)