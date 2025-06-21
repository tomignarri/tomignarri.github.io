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


    

    const projectCard1 = (
        <section>
            <h1>iperbot</h1>
            <a href="https://bitbucket.org/tomignarri/iperbot/src/master/" target="_blank">
                <button>
                BITBUCKET
                </button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.Iperdesign.Ipergame&hl=en_US" target="_blank">
                <button>
                ANDROID
                </button>
            </a>
            <a href="https://apps.apple.com/us/app/iperbot/id1483956161" target="_blank">
                <button>
                IPHONE
                </button>
            </a>
            <a href="https://iperlab.com" target="_blank">
                <button>
                 PLAY ON DESKTOP
                </button>
            </a>
        </section>
    );


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
            title="Ingrezza" 
            position={ myPositionArray[2] }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, React"
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
        />
        {/* <Card title="Bookshelf Viewer" position={ [7, 3, 6] } />
        <Card title="Government Bodies" position={ [7, 3, 6] } /> */}
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}