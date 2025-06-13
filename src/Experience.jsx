import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import Zoom from './Zoom.jsx'
import Pan from './Pan.jsx'
import ViewAll  from './ViewAll.jsx'
import Card from './Card.jsx'

export default function Experience()
{
    const cardContent1 = (
        <div style={{ background: 'red', padding: '6px', borderRadius: '6px', fontSize: '14px' }}>
          <strong>Mesh Label</strong><br />
          Linked to this box
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