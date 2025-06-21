//import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import './main.scss'
import Experience from './Experience.jsx'
import Intro from './Intro.jsx'


const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <>
        <nav id="top-nav">
            <button>
                About me.
            </button>
            <article>
                <h1>Hello</h1>
                <p>My name is Tom Ignarri. I'm a developer based in Philadelphia, PA.</p>
            </article>
        </nav>
        <nav id="bottom-nav">
            <button id="full-zoom-out">View all</button>
        </nav>

        <Intro />

        <Canvas
            className="r3f"
            orthographic
            camera={ {
                fov: 45,
                zoom: 30,
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