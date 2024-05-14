import React from "react";
import { useEffect } from "react";

export default function Hero(){
    const intro = "Day*Blassingame";
    let position = 0;
    let end = intro.length;
    let currentText = '';
    
    const delay = (ms) => {
        setTimeout(()=>(typewriter()),ms)
    }

    function typewriter(){
        const text = document.getElementById('intro');
        setTimeout(()=>{
            if(intro.charAt(position) == '*'){
                currentText = currentText + '\r\n';
                text.textContent = currentText;
                position++;
            }
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
            delay(1500)
        }
    },[])

    return(
        <div id='hero' className="p-L-section_wrapper p-C-background_teal">
            <div className="p-C-hero_container">
                <span className="overlay">
                    <span className="p-C-hero_introContainer">
                        <h4>Hi, I'm</h4>
                        <h1 id='intro'></h1>
                        <h3>Front End Developer</h3> 
                        <a className='p-L-section_button' href="#about">
                            Learn More
                        </a>    
                    </span>
                </span>
            </div>            

        </div>
    );
}