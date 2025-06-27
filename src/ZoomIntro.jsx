import { memo, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ZoomIntro = memo(function ZoomIntro() {

    useEffect(() => {
        const introContainer = document.querySelector('#zoom-intro');

    }, []);

    
    return <article id="zoom-intro">
            <h1>Scroll to zoom</h1>
            <aside>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#ffffff",}} />
            </aside>
        </article>;
});
  
  export default ZoomIntro;