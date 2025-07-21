import Nav from "./Nav.jsx";
import Card from "./Card.jsx";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { store } from "./store";

const Ui = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentChosenTab, setCurrentChosenTab] = useState(0);

  const scrollAreaRef = useRef(null);
  const isAutoScrolling = useRef(false);

  const { aboutMe, csl, neurocrine, arcutis, cooper, iperbot } = store;

  const clients = [aboutMe, csl, neurocrine, arcutis, cooper, iperbot];

  const { scrollYProgress } = useScroll({
    container: scrollAreaRef,
  });



  useEffect(() => {
    const scrollToCurrent = () => {
        if (!scrollAreaRef.current) return;
  
        const targetCard = scrollAreaRef.current.children[currentChosenTab];
        if (targetCard) {
          targetCard.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

    }
    scrollToCurrent();
     
  }, [currentChosenTab])


  const scrollToCurrent = (target) => {
    if (!scrollAreaRef.current) return;
    
    const targetCard = scrollAreaRef.current.children[target];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
}

  const getScrollPoints = () => {
    if (!scrollAreaRef.current) return [];

    const elements = scrollAreaRef.current.children;

    return Array.from(elements).map((element, index) => ({
      element,
      top: element.getBoundingClientRect().top,
      offsetTop: element.offsetTop,
      index,
    }));
  };


  const handleScroll = () => {
    //if (isAutoScrolling) return
    const scrollTop = scrollAreaRef.current.scrollTop;
    const scrollPoints = getScrollPoints();

    let activeSection = 0;

    // set active section depending on scroll position
    scrollPoints.forEach((point, index) => {
      if (scrollTop >= point.offsetTop - 100) {
        activeSection = index;
      }
    });

    setCurrentPage(activeSection);
  };


  return (
    <>
      <Nav currentPage={currentPage} currentChosenTab={currentChosenTab} setCurrentChosenTab={setCurrentChosenTab} />

      <motion.div
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          originY: 0,
        }}
      />

      <div id="all-cards-container" ref={scrollAreaRef} onScroll={handleScroll}>
        {clients.map((client, i) => (
          <Card
            key={i}
            title={client.title}
            techUsed={client.techUsed}
            content={client.content}
            links={client.links}
          />
        ))}
      </div>
    </>
  );
};

export default Ui;
