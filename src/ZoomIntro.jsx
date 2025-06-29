import { memo, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ZoomIntro = memo(function ZoomIntro({ introPartDone, setIntroPartDone }) {
    console.log('MyComponent rendered');
    const [zoomIsReached, setZoomIsReached] = useState(false);

    useEffect(() => {
        const zoomIntroContainer = document.querySelector('#zoom-intro');
        const parentOverlay = document.querySelector('.intro-container');
        

        let zoomAmount = 0;

        const onZoom = (e) => {
            zoomAmount += Math.abs(e.deltaY)
            if(zoomAmount > 200 && !zoomIsReached) {
                zoomIntroContainer.style.opacity = '0';
                zoomIntroContainer.style.pointerEvents = 'none';
                setZoomIsReached(true)
                if (introPartDone) {
                    parentOverlay.style.opacity = '0';
                }
                setIntroPartDone(true);
            }
        }

        window.addEventListener('wheel', onZoom);

        return () => {
            window.removeEventListener('wheel', onZoom);
        }

    }, [introPartDone, setIntroPartDone]);

    
    return <article id="zoom-intro">
            <h1>Scroll to zoom</h1>
            <aside>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#ffffff",}} />
            </aside>
        </article>;
});
  
  export default ZoomIntro;