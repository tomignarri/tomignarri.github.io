import { memo, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist, faHand } from '@fortawesome/free-solid-svg-icons'

const PanIntro = memo(function PanIntro({ introPartDone, setIntroPartDone }) {

    useEffect(() => {
        const panIntroContainer = document.querySelector('#pan-intro');
        const parentOverlay = document.querySelector('.intro-container')
        const grabArea = document.querySelector('#pan-intro aside');
        const grabIcon = document.querySelector('#grab-icon');
        const openHandIcon = document.querySelector('#open-hand-icon');

        let firstMouseMove = true;

        let isGrabbing = false;

        const onMouseDown = (e) => {
            isGrabbing = true;
            document.body.style.cursor = 'grabbing';
            grabIcon.style.display = 'block';
            openHandIcon.style.display = 'none';
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            if (!isGrabbing) return;
            if (firstMouseMove) {
                panIntroContainer.style.opacity = '0';
                panIntroContainer.style.pointerEvents = 'none';
                firstMouseMove = false;
                if (introPartDone) {
                    parentOverlay.style.opacity = '0';
                }
                setIntroPartDone(true);
            }
        };

        const onMouseUp = () => {
            isGrabbing = false;
            document.body.style.cursor = 'default';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        if (grabArea) {
            grabArea.addEventListener('mouseover', () => { document.body.style.cursor = 'grab'; })
            grabArea.addEventListener('mousedown', onMouseDown);
        }

        // Clean up on unmount
        return () => {
            if (grabArea) {
                grabArea.removeEventListener('mousedown', onMouseDown);
                grabArea.removeEventListener('mouseover', () => { document.body.style.cursor = 'grab'; })
            }
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [introPartDone, setIntroPartDone]);

    
    return <article id="pan-intro">
            <h1>Click and drag to navigate</h1>
            <aside>
                <FontAwesomeIcon id="grab-icon" icon={faHandBackFist} size="2xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon id="open-hand-icon" icon={faHand} size="2xl" style={{color: "#ffffff",}} />
            </aside>
        </article>;
});
  
  export default PanIntro;