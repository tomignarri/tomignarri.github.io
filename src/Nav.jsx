import { useState, useRef } from "react";


const Nav = ({ currentPage, setCurrentPage }) => {
    const buttonRefs = useRef([]);

    buttonRefs.current = buttonRefs.current.slice(0, 6);

    const tabs = ["About Me", "CSL Behring", "Neurocrine", "Arcutis", "Cooper", "Iperbot"];


    const handleTabClick = (index) => {
        setCurrentPage(index);
    }
    

    return (
        <nav id="top-nav">
            
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    
                    ref={el => buttonRefs.current[index] = el}
                    onClick={() => handleTabClick(index)}
                    className={currentPage === index ? 'active' : ''}
                >
                    {tab}
                </button>
            ))}
       
      </nav>
    );
};

export default Nav;