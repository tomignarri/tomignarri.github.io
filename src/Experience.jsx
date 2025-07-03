import { PresentationControls, Environment } from '@react-three/drei'
import { MathUtils } from 'three'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import Objects from './Objects.jsx'
import Background from './Background.jsx'
import { store } from './store';
import { useState } from 'react'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'


export default function Experience()
{
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
        arcutis: [-15, store.cardDepth, -6],
        csl: [0, store.cardDepth, -6],
        neuro: [15, store.cardDepth, -6],
        cooper: [-8, store.cardDepth, 6],
        iper: [8, store.cardDepth, 6]
    };

    
    const mbPositions = {
        arcutis: [0, store.cardDepth, -8],
        csl: [0, store.cardDepth, 0],
        neuro: [0, store.cardDepth, 8],
        cooper: [0, store.cardDepth, 16],
        iper: [0, store.cardDepth, 24]
    };


    const myCardPositions = isMobile ? mbPositions : dtPositions;



    return <>

        <color args={ [store.expBackgroundColor] } attach="background" />

     
        <Environment preset="city" />

        <Background />

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
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}