import { PresentationControls, Environment } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import { store } from './store';
import { useState, useEffect, useRef } from 'react'


export default function Experience()
{
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


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
    
    const desktopPositions = [
        [-18, 3, -6],
        [-6, 3, -6],
        [6, 3, -6],
        [18, 3, -6],
        [7, 3, 6]
    ];

    const mobilePositions = [
        [0, 3, -8],
        [0, 3, 0],
        [0, 3, 8],
        [0, 3, 16],
        [0, 3, 24]
    ];



    const myPositionArray = isMobile ? mobilePositions : desktopPositions;


    const iperbotButtons = <>
        <a href="https://iperdesign.com/iperbot-game/" target='_blank'>Play the game</a>
        <br />
        <a href="https://bitbucket.org/tomignarri/iperbot/src/master/" target="_blank">Bitbucket</a>
    </>;

    const iperbotContent = <>
        <article>
            <p>IperBot is an internal project developed by several interns and designers at 
                    Iperdesign. This was my first project in Unity. It was a deep dive into a very 
                    unfamiliar API which made for a challenging experience. .</p>
            <img alt="iperbot-img-1" draggable="false" src="gifs/iperbot_2.gif" />
        </article>
        <article>
            <p>Testing the game with users 
                    was a major part of this project as well. It was important that the difficulty was 
                    appropriate in such a way that experienced gamers could have fun and less experienced 
                    gamers would not be overwhelmed.</p>
            <img alt="iperbot-img-1" draggable="false" src="gifs/iperbot_1.gif" />
        </article>
    </>


    



    return <>

        <color args={ [store.expBackgroundColor] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls 
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap
        >
   
        </PresentationControls>

        <Card 
            title="Arcutis" 
            position={ myPositionArray[0] } 
            techUsed="Javascript, HTML, SCSS, Drupal, React, PHP"
        />
        <Card 
            title="Etranadez" 
            position={ myPositionArray[1] }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, Greensock"
        />
        <Card 
            title="Neurocrine/Ingrezza" 
            position={ myPositionArray[2] }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, React, NodeJS"
        />
        <Card 
            title="Cooper Surgical" 
            position={ myPositionArray[3] }
            techUsed="Javascript, HTML, SCSS, Wordpress"
        />
        <Card 
            title="Iperbot" 
            position={ myPositionArray[4] }
            techUsed="Unity, C#"
            links={ iperbotButtons }
            content={ iperbotContent }
        />
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}