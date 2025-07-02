import { Instances } from '@react-three/drei'
import { MathUtils } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Object from './Object'


export default function Objects() {
    const ref = useRef()
    const particles = Array.from({ length: 50 }, () => ({
        factor: MathUtils.randInt(20, 100),
        speed: MathUtils.randFloat(0.01, 0.75),
        xFactor: MathUtils.randFloatSpread(40),
        yFactor: MathUtils.randFloatSpread(10),
        zFactor: MathUtils.randFloatSpread(10)
    }))

    //fix this
    // useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))
    return (
      <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshStandardMaterial roughness={1} color="#f0f0f0" />
        {particles.map((data, i) => (
          <Object key={i} {...data} />
        ))}
      </Instances>
    )
  }