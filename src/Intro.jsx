import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

const Intro = memo(function Intro() {
    
    return <section id="intro-container">
        <article>
            <h1>Click and hold to navigate</h1>
            <aside>
                <FontAwesomeIcon icon={faUpDownLeftRight} style={{color: "#ffffff",}} />
            </aside>
        </article>
    </section>;
});
  
  export default Intro;