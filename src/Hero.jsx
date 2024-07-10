import React from "react";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero(){
    const intro = "Day Blassingame";
    let position = 0;
    let end = intro.length;
    let currentText = '';
    
    const delay = (ms) => {
        setTimeout(()=>(typewriter()),ms)
    }

    function typewriter(){
        const text = document.getElementById('intro');
        
        setTimeout(()=>{
            if(position < end){
                currentText += intro.charAt(position);
                position++;
                text.textContent = currentText + '|';
                typewriter();
            }if(position == end){
                text.textContent = currentText;
            }
        },100)
    }

    useEffect(()=>{
        const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if(!!isReduced){
            const text = document.getElementById('intro');
            text.textContent = intro;
        }else{
            delay(600)
        }
    },[])

    document.addEventListener('DOMContentLoaded', () => {
        const cursor = document.querySelector('.cursor');
      
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
      
        document.addEventListener('mousemove', e => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });
      
        function animatecursor() {
          cursorX += (mouseX - cursorX) * 0.15;
          cursorY += (mouseY - cursorY) * 0.15;
      
          cursor.style.left = `${cursorX}px`;
          cursor.style.top = `${cursorY}px`;
      
          requestAnimationFrame(animatecursor);
        }
      
        animatecursor();
      });

    return(
        <div id='hero' className="p-L-section_wrapper p-C-background_black">
             <div className='cursor'></div>
             <div className="p-C-hero_container">
                <span className="p-C-hero_introContainer">
                    <h1 id='intro'></h1>
                    <h3> Junior Front End Engineer</h3> 
                    <a className='p-C-hero_link'href="#about">
                        Learn more about me <FaLongArrowAltRight/>
                    </a>    
                </span>
            </div>            

        </div>
    );
}