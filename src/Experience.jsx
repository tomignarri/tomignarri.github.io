import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import { store } from './store';

export default function Experience()
{
    const cardContent1 = (
        <section>
          <h1>Hello</h1>
          <h2>Welcome to my site</h2>
          <p>I'm Tom, a developer focused on usability, clarity, and motion. My work is driven by a belief in engaging interaction.</p>
        </section>
    );

    const contactCard = (
        <section>

        </section>
    );

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

        <Card content={cardContent1} position={ [-6, 3, 2] } />
        <Card content={projectCard1} position={ [7, 3, 2] } />
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}