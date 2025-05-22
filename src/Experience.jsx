import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience()
{

    return <>

        <color args={ [ '#241a1a' ] } attach="background" />

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




    </>
}