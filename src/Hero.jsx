import React from "react";
import { useEffect } from "react";

export default function Hero(){
    const intro  =  "Hello, I'm Day Blassingame.";
    let introArray = intro.split('');
    let position = 0;
    let end = introArray.length;
    let currentText = '';
    
    const typewriter = () => {
        const text = document.getElementById('intro');
        setTimeout(()=>{
            if(position < end){
                currentText += introArray[position];
                position++;
                text.textContent = currentText + '|';
                typewriter();
            }if(position == end){
                text.textContent = currentText;
            }
        },80)
    }

    useEffect(()=>{
        const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if(!!isReduced){
            const text = document.getElementById('intro');
            text.textContent = intro;
        }else{
            typewriter();
        }
    },[])

    return(
        <div id='hero' className="p-C-hero">
            <span className="p-C-hero_missionContainer">
                <h2 id='intro'></h2>
                <h3> Creative Front-End Engineer</h3>

            </span>
            <a href='google.com'>
                <button> Connect with me</button>
            </a>
        </div>
    );
}