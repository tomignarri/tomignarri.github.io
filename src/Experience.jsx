import { PresentationControls, Environment } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import { store } from './store';
import { useState } from 'react'


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
        arcutis: [-15, 3, -6],
        csl: [0, 3, -6],
        neuro: [15, 3, -6],
        cooper: [-8, 3, 6],
        iper: [8, 3, 6]
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
            <img alt="iperbot-img-2" draggable="false" src="gifs/iperbot_2.gif" />
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
            <p>
                This campaign was one I contributed to during my time at AbelsonTaylor.
                Working closely with my colleagues, we played a key role in the digital execution of an 
                educational initiative showcasing advances in gene therapy for Hemophilia&nbsp;B&nbsp;treatment.
            </p>
            <video autoPlay loop muted playsInline><source src="videos/hemevolution-video-1.mp4" type="video/mp4" /></video>
        </article>
        <article>
            <p>
                My role was to spearhead the development of a website for patients. 
                Our designers created a variety of interactive elements and animations, which I implemented using the Greensock library.
                Pictured on the right is a form that communicated with an api built in ASP.NET.
            </p>
            <video autoPlay loop muted playsInline><source src="videos/hemevolution-video-2.mp4" type="video/mp4" /></video>
        </article>
    </>

    const arcutisLinks = <>
        <a href="https://pharmawards.com/2024-arcutis-dtp-cream-that-can/#website" target='_blank'>View campaign</a>
        <br />
        <a href="https://www.zoryve.com/save-with-zoryve-direct" target='_blank'>View the website</a>
    </>

    const arcutisContent = <>
        <article>
            <p>
                Arcutis's topical product, Zoryve, was a large campaign encompassing many digital executions.
                I was a part of a variety of emails and online ads, but my primary project for this campaign was a 
                website for both patients and healthcare providers.
                This was a project that was full of challenging problems and tight deadlines, where I was often using 
                tools with which I did not have a lot of experience.
            </p>
            <video autoPlay loop muted playsInline><source src="videos/arcutis-video-1.mp4" type="video/mp4" /></video>
        </article>
        <article>
            <p>
                Part of this project which I was primarily resposible for was the front-end of a system for patients to register 
                for copay cards for the product.
                Successful communication with the IT team of our client and an external vendor was pivotal. We would 
                frequently coordinate together to diagnose and fix issues 
                with the system. The website has since been out of the agency's hands, but the form that I built is still as 
                it was. You can see it on the "View the webiste" link&nbsp;above.
            </p>
            <img alt="arcutis-image-1" src="images/arcutis-image-1.png" />
        </article>
    </>


    const neurocrineLinks = <>
        <a href="https://www.morethanhd.com/" target='_blank'>View More Than HD</a>
    </>


    const neurocrineContent = <>
        <article>
            <p>
                Neurocrine was one client that had a particularly important. I was involved with of variety of
                websites, Interactive Visual Aids (IVA), email campaigns, and online banner advertisements. The largest of 
                these was a brand called Ingrezza. These projects went through many different iterations and additions. Fast turnaround 
                time was essential, as was coordination with my developer colleagues and other teams across due to the large volume of 
                content and detail needed for this brand.
            </p>
            <video autoPlay loop muted playsInline><source src="videos/neurocrine-video-1.mp4" type="video/mp4" /></video>
        </article>
        <article>
            <p>
                One project for this client where I was able to utilize my knowledge in Node.js, was for an educational site to serve 
                patients, healthcare providers and whomever, to learn about Huntington's Disease. The title of the project is More Than HD.
                This was built from the ground up using vanilla javascript and Node.js. We built an anonymous, dynamic polling system to collect data 
                about users of the site using that Node.js backend.
            </p>
            <video autoPlay loop muted playsInline><source src="videos/neurocrine-video-2.mp4" type="video/mp4" /></video>
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
            content={ arcutisContent }
            links={ arcutisLinks }
        />
    
        <Card 
            title="Neurocrine" 
            position={ myCardPositions.neuro }
            techUsed="Javascript, HTML, SCSS, ASP.NET, C#, React, Node.js"
            links={ neurocrineLinks }
            content={ neurocrineContent }
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