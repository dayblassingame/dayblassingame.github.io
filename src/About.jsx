import React from "react";
import CV from './files/Day-Blassingame-Resume.pdf';

export default function About(){
    const bio = {
        intro: "I'm Day!",
        summary: "A detail-oriented Frontend Engineer with a knack for creating intuitive and dynamic user experiences.",
        summary1: "With over 2 years of experience in front-end development, I have honed my skills in HTML, CSS, JavaScript, " +
        "and modern libraries and frameworks like React and Angular, building sleek UI components for a high-traffic, streaming company. I enjoy leading front-end projects, mentoring others, and enhancing user experience. "+
        "When developing front-end solutions, I prioritize accessibility, maintainability, and best practices.",
        }

    const {intro, summary, summary1} = bio;
    
    return(
        <div id='about' className="p-L-section_wrapper">
            <div className="p-L-heading_border">
                <h4 className='p-L-section_h4'> /about</h4>
            </div>
            <div className='p-C-about_wrapper'> 
                <span className="p-C-about_text">
                    <p><b>{intro}</b></p>
                    <p name='biography'>{summary}</p>
                    <p>{summary1}</p>
                    <span>
                        <a className="p-L-section_button" name='projects' href='#projects'> View Projects</a>
                        <a className="p-L-section_button" name='resume' href={CV} target="_blank">Download CV</a>
                    </span>
                    
                </span>
            </div>
        </div>
    )
}