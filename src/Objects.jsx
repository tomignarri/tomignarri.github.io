import { Instances, Instance } from '@react-three/drei'
import Object from './Object'


export default function Objects() {

    // over time create new object
    const objectsArr = Array.from({ length: 10 });

    return <>
        {objectsArr.map((_, i) => (
          <Object key={i} index={i} />
        ))}
    </>
};