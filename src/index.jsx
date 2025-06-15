import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import Experience from './Experience.jsx'






const root = ReactDOM.createRoot(document.querySelector('#root'))




root.render(
    <>
        <nav>
            <button id="full-zoom-out">View all</button>
        </nav>

        <Canvas
            className="r3f"
            orthographic
            camera={ {
                fov: 45,
                zoom: 100,
                near: 0.1,
                far: 200,
                position: [ 0, 7, 0 ]
            } } 
        >
            <ambientLight intensity={0.5} />
            <Experience />
            <gridHelper args={[10, 10]} />
 
        </Canvas>

    </>
)