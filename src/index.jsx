import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import Experience from './Experience.jsx'
import Card from './Card.jsx'



const root = ReactDOM.createRoot(document.querySelector('#root'))




root.render(

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
        <Experience />
        <gridHelper args={[10, 10]} />
        
        {/* <Html
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }}
        >
            <h1>Under construction</h1>
            <p>Check below to view me and some of my work</p>
            <a href="https://www.linkedin.com/in/thomas-ignarri-07ba8680/">LinkedIn</a>
        </Html> */}

        <Html
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }}
        >
            <h1>Under construction</h1>
            <p>Check below to view me and some of my work</p>
            <a href="https://www.linkedin.com/in/thomas-ignarri-07ba8680/">LinkedIn</a>
        </Html>
     
    </Canvas>
)