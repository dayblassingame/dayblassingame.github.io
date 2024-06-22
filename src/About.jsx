import React from "react";
import CV from './files/Day-Blassingame-CV.pdf';

export default function About(){
    const bio = {
        p1: "Since beginning my journey into web development in 2018, I have developed a passion for infusing digital landscapes with creativity and innovation. " +
        "I see web development not just as lines of code, but as a canvas where imagination meets functionality. ",
        p2: "Over the years, I've honed my skills in a variety of technologies including ReactJS, CSS & Sass, and beyond. " +
        "But what sets me apart is my ability to blend technical expertise with a keen eye for detail. I strive to deliver websites that not only look great but also function flawlessly.",
        p3: "When I'm not immersed in the digital realm, you can find me exploring the intersection of technology and art, embarking on journeys to new worlds through the pages of books , " +
        "or crafting beautiful recipes in my kitchen. Because true creativity knows no bounds, the best ideas often come from the most unexpected places. ",
         p4:"Let's connect and turn your digital ideas into reality!."
    }

    const skills = 'HTML, CSS & Sass / ReactJS / Node.js / Webpack / Git / Relational & Cloud Databases / API / Complex Problem Solving / Agile Methodology'

    
    return(
        <div id='about' className="p-L-section_wrapper">
            <div className="p-L-heading_border">
                <h4 className='p-L-section_h4'> /about</h4>
            </div>
            <div className='p-C-about_wrapper'> 
                
                <span className="p-C-about_text">
                    <p>{bio.p1}</p>
                    <p>{bio.p2}</p>
                    <p>{bio.p3}</p>
                    <p>{bio.p4}</p>

                    <a className="p-L-section_button" href={CV} target="_blank">Download CV</a>
                </span>
            </div>
        </div>
    )
}