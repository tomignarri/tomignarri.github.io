import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'

export default function Experience()
{
    const cardContent1 = (
        <div style={{ padding: '6px', borderRadius: '6px', fontSize: '14px' }}>
          <h1>Hello</h1>
          <h2>Welcome to my site</h2>
          <p>I'm Tom, a developer focused on usability, clarity, and motion. My work is driven by a belief in engaging interaction.</p>
        </div>
    );

    const contactCard = (
        <div style={{ padding: '6px', borderRadius: '6px', fontSize: '14px' }}>

        </div>
    );

    const projectCard1 = (
        <div>
            <h1>iperbot</h1>
        </div>
    );


    return <>

        <color args={ [ '#ffffff' ] } attach="background" />

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

        <Card content={cardContent1}  />
        <Zoom />
        <Pan />
        <ViewAll />
      

    </>
}