import Nav from "./Nav.jsx";
import Card from "./Card.jsx";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { store } from "./store";

const Ui = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const scrollAreaRef = useRef(null);

  const { csl, neurocrine, arcutis, cooper, iperbot } = store;

  const clients = [csl, neurocrine, arcutis, cooper, iperbot];

  const { scrollYProgress } = useScroll({
    container: scrollAreaRef,
  });

 

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
    const scrollTop = scrollAreaRef.current.scrollTop;
    const scrollPoints = getScrollPoints();
    
    let activeSection = 0;
    
    scrollPoints.forEach((point, index) => {
      if (scrollTop >= point.offsetTop - 100) {
        activeSection = index;
      }
    });
    
    setCurrentPage(activeSection);
    console.log(currentPage);
  };


  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />

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
