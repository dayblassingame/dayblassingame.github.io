import React from "react";
import aboutImg from './images/aboutImg.jpg';

export default function About(){
    const bio = {
        imgSrc: aboutImg,
        h1: "I'm a creative Front End Engineer from South Carolina",
        p1: "Since beginning my journey into web development in 2018, I have developed a passion for infusing digital landscapes with creativity and innovation. " +
        "I see web development not just as lines of code, but as a canvas where imagination meets functionality. ",
        p2: "Over the years, I've honed my skills in a variety of technologies including ReactJS, CSS & Sass, and beyond. " +
        "But what sets me apart is my ability to blend technical expertise with a keen eye for detail. I strive to deliver websites that not only look great but also function flawlessly.",
        p3: "When I'm not immersed in the digital realm, you can find me exploring the intersection of technology and art, experimenting with new creative tools, " +
        "or crafting beautiful recipes in my kitchen. Because true creativity knows no bounds, and the best ideas often come from the most unexpected places. ",
         p4:"Let's connect and turn your digital dreams into reality!."
    }

    const skills = 'HTML, CSS & Sass / ReactJS / Node.js / Webpack / Git / Relational & Cloud Databases / API / Complex Problem Solving / Agile Methodology'

    return(
        <div id='about' className='p-C-about_wrapper'> 
            <h1> About</h1>
            <div className="p-C-about_img_wrapper">
                <img src={bio.imgSrc} alt="Day Blassingame Image"/>
            </div>
            <span className="p-C-about_text">
                <h2>{bio.h1}</h2>
                <p>{bio.p1}</p>
                <p>{bio.p2}</p>
                <p>{bio.p3}</p>
                <p>{bio.p4}</p>
            </span>
            <div>
                <h3>Skills</h3>
                <p>{skills}</p>
            </div>
        </div>
    )
}