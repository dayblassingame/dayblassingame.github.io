import React from "react";
import CV from './files/Day-Blassingame-Resume.pdf';

export default function About(){
    
    const bio = {
        intro: "I'm Day!",
        summary: `As a Frontend Engineer with 2 years of experience, 
        I've honed my skills in frontend development, constructing modern, scalable web apps for companies such as Spectrum Communications,
        Rocket Mortgage, and Michelin!`,
        summary2: `My solid foundation in HTML, Sass, CSS, JavaScript, 
        and React has enabled me to develop dynamic user interfaces, optimize performance, and ensure seamless user experiences. 
        Recently, I expanded my tech stack into Next.js and Apollo GraphQL to further enhance my capabilities. `,
        summary3: `Known for my problem-solving skills 
        and attention to detail, I thrive in collaborative environments and am committed to continuous learning and improvement. 
        Let's connect and build something amazing together.`
        }

    const {intro, summary, summary2, summary3} = bio;
    
    return(
        <div id='about' className="p-L-section_wrapper">
            <div className="p-L-heading_border">
                <h4 className='p-L-section_h4' style={{textAlign:'center', marginBottom: '30px'}}> Welcome to my portfolio!</h4>
            </div>
            <div className='p-C-about_wrapper'> 
                <span className="p-C-about_text">
                    <h5>{intro}</h5>
                    <p name='biography'>{summary}</p>
                    <p >{summary2}</p>
                    <p >{summary3}</p>
                    <span>
                        <a className="p-L-section_button" name='projects' href='#projects'> View Projects</a>
                        <a className="p-L-section_button" name='resume' href={CV} target="_blank"> Download CV </a>
                    </span>
                    
                </span>
            </div>
        </div>
    )
}