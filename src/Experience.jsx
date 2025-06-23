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
    
    const dtPositions = {
        arcutis: [-18, 3, -6],
        csl: [0, 3, -6],
        neuro: [18, 3, -6],
        cooper: [-6, 3, 6],
        iper: [7, 3, 6]
    };

    
    const mbPositions = {
        arcutis: [0, 3, -8],
        csl: [0, 3, 0],
        neuro: [0, 3, 8],
        cooper: [0, 3, 16],
        iper: [0, 3, 24]
    };



    const myCardPositions = isMobile ? mbPositions : dtPositions;


    const iperbotLinks = <>
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

    const cslLinks = <>
        <a href="https://pharmawards.com/2023-w3-hemevolution-mkt-integrated-campaign/" target='_blank'>View campaign</a>
    </>

    const cslContent = <>
        <article>
            <p>This is a campaign that I was a part of while at Abelson Taylor. 
                My colleages and I were integral to the digital execution of an educational campaign 
                on the advances in gene therapy for Hemophilia B treatment.</p>
            <img />
        </article>
        <article>
            <p>My role was spearheading the development of a website for patients.</p>

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
            position={ myCardPositions.arcutis } 
            techUsed="Javascript, HTML, SCSS, Drupal, React, PHP"
        />
     
        <Card 
            title="Neurocrine/Ingrezza" 
            position={ myCardPositions.neuro }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, React, NodeJS"
        />
        <Card 
            title="Cooper Surgical" 
            position={ myCardPositions.cooper }
            techUsed="Javascript, HTML, SCSS, Wordpress"
        />
        <Card 
            title="CSL Behring" 
            position={ myCardPositions.csl }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, Greensock"
            links={ cslLinks }
            content={ cslContent }
        />
        <Card 
            title="Iperbot" 
            position={ myCardPositions.iper }
            techUsed="Unity, C#"
            links={ iperbotLinks }
            content={ iperbotContent }
        />
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}