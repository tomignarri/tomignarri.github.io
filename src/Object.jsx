import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Instance } from '@react-three/drei'


export default function Object({ factor, speed, xFactor, yFactor, zFactor }) {
    const ref = useRef()
    useFrame((state) => {

        // Random integer with time and random speed float, used for random scale and position for each bubble
        const timeSpeedFactor = factor + state.clock.elapsedTime * (speed / 2)

        console.log((Math.sin(timeSpeedFactor) + Math.cos(timeSpeedFactor * 2) / 10 + yFactor + Math.sin((timeSpeedFactor / 10) * factor) + (Math.cos(timeSpeedFactor * 2) * factor) / 10) * 0.5 + 1)

        ref.current.scale.setScalar(Math.max(1.5, Math.cos(timeSpeedFactor) * 5))
        ref.current.position.set(
          Math.cos(timeSpeedFactor) + Math.sin(timeSpeedFactor * 1) / 10 + xFactor + Math.cos((timeSpeedFactor / 10) * factor) + (Math.sin(timeSpeedFactor * 1) * factor) / 10,
          (Math.sin(timeSpeedFactor) + Math.cos(timeSpeedFactor * 2) / 10 + yFactor + Math.sin((timeSpeedFactor / 10) * factor) + (Math.cos(timeSpeedFactor * 2) * factor) / 10) * 0.5 + 2.5,
          Math.sin(timeSpeedFactor) + Math.cos(timeSpeedFactor * 2) / 10 + zFactor + Math.cos((timeSpeedFactor / 10) * factor) + (Math.sin(timeSpeedFactor * 3) * factor) / 4
        )
    })
    return <Instance ref={ref} />
  }