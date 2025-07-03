import { OrbitControls, Environment } from '@react-three/drei'
import { MathUtils } from 'three'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import Objects from './Objects.jsx'
import Background from './Background.jsx'
import { store } from './store';
import { useState } from 'react'
import { useThree } from '@react-three/fiber';
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'
import * as THREE from 'three';
import { isPointInPyramid } from './geometryUtils';


export default function Experience()
{

    const { camera } = useThree();

    const clamp = () => {
        console.log(isPointInPyramid({ x: camera.position.x, y: camera.position.y, z: camera.position.z}));
    }


    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    const { iperbot, csl, arcutis, neurocrine, cooper } = store;


    const topNavButton = document.querySelector('#top-nav button');
    const topNav = document.querySelector('#top-nav');
    const aboutContent = document.querySelector('#top-nav article');
    let topNavOpen = false;

    const toggleTopNav = () => {
        if(!topNavOpen) {
            topNav.style.height = '200px';
            aboutContent.style.display = 'block';
            topNavOpen = true;
        } else {
            topNav.style.height = '32px';
            aboutContent.style.display = 'none';
            topNavOpen = false;
        }
    }

    topNavButton.addEventListener('click', toggleTopNav);
    topNavButton.addEventListener('touch', toggleTopNav);
    
    const dtPositions = {
        arcutis: [-15, -6, store.cardDepth],
        csl: [0, -6, store.cardDepth],
        neuro: [15, -6, store.cardDepth],
        cooper: [-8, 6, store.cardDepth],
        iper: [8, 6, store.cardDepth]
    };
    
    const mbPositions = {
        arcutis: [0, -8, store.cardDepth],
        csl: [0, 0, store.cardDepth],
        neuro: [0, 8, store.cardDepth],
        cooper: [0, 16, store.cardDepth],
        iper: [0, 24, store.cardDepth]
    };


    const myCardPositions = isMobile ? mbPositions : dtPositions;



    return <>

        <color args={ [store.expBackgroundColor] } attach="background" />

     
        <Environment preset="city" />

        <Background />

        <ambientLight intensity={1.5} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={false}
          zoomSpeed={0.7}
          panSpeed={0.7}
          target={[0, 0, 0]}
          minDistance={10}
          maxDistance={48}
          mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: null
          }}
          onChange={clamp}
        />

        <Card 
            title="Arcutis" 
            position={ myCardPositions.arcutis } 
            techUsed="Javascript, HTML, SCSS, Drupal, React, PHP"
            content={ arcutis.content }
            links={ arcutis.links }
        />
    
        <Card 
            title="Neurocrine" 
            position={ myCardPositions.neuro }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, React, Node.js"
            links={ neurocrine.links }
            content={ neurocrine.content }
        />
        <Card 
            title="Cooper Surgical" 
            position={ myCardPositions.cooper }
            techUsed="Javascript, HTML, SCSS, Wordpress"
            content={ cooper.content }
        />
        <Card 
            title="CSL Behring" 
            position={ myCardPositions.csl }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, Greensock"
            links={ csl.links }
            content={ csl.content }
        />
        <Card 
            title="Iperbot" 
            position={ myCardPositions.iper }
            techUsed="Unity, C#"
            links={ iperbot.links }
            content={ iperbot.content}
        />
        {/* <Zoom />
        <Pan /> */}
        {/* <ViewAll /> */}
      

    </>
}