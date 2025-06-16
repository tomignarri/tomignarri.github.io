import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'
import { store } from './store';


export default function Experience()
{
    const topNavButton = document.querySelector('#top-nav button');
    const topNav = document.querySelector('#top-nav');
    let topNavOpen = false;

    const toggleTopNav = () => {
        topNav.style.height = '200px';
    }

    topNavButton.addEventListener('click', toggleTopNav);



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

    const projectCard2 = (
        <section>
            <h1>Arcutis</h1>
        </section>
    )

    const projectCard3 = (
        <section>
            <h1>Etranadez</h1>
        </section>
    )

    const projectCard4 = (
        <section>
            <h1>Ingrezza</h1>
            <p>web projects, ivas</p>
        </section>
    )

    const projectCard5 = (
        <section>
            <h1>Cooper Surgical</h1>
        </section>
    )

    const projectCard6 = (
        <section>
            <h1>Bookshelf Viewer</h1>
        </section>
    )



    


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

        <Card content={projectCard1} position={ [-6, 3, 2] } />
        <Card content={projectCard2} position={ [7, 3, 2] } />
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}