import React from "react";
import aboutImg from './images/aboutImg.jpg';
import mentorImg from './images/mentorImg.jpg';

export default function About(){
    const bio = {
        imgSrc: aboutImg,
        img2Src: mentorImg,
        h1: "About me",
        h2: "Professional Frontend Engineer having 3 years of experience",
        p1: "I'm Day Blassingame, a zealous software engineer dedicated to crafting immersive digital solutions. " +
        "My journey into coding began with a fascination for turning code into visually stunning and functionally robust applications. " +
        "From there, I earned my Bachelors in computer science from the HBCU with the best computer science program, North Carolina A&T State University, " +
        "however, my passion for learning didn't stop there.",
        p2: "Learning is a constant in my journey. I'm passionate about staying ahead of industry trends, absorbing new technologies, and implementing best practices. " +
        "Each project is an opportunity to enhance my skills and make a meaningful impact, and " + 
        "my goal is to create solutions that not only meet company requirements but also elevate the user experience to new heights. ",
        p3: "Beyond coding, I am a mentor and an avid explorer of new hobbies. My current hobbies include cooking, sewing, and outdoor adventures. Discovering new hobbies " +
        "allow me to further understand my strengths and weaknesses and cultivate my weaknesses into strengths."
    }

    return(
        <div id='about' className='p-C-about_wrapper'> 
            <div className="p-C-about_img_wrapper">
                <img src={bio.imgSrc} alt="Day Blassingame Image"/>
                <span className="overlay"></span>
                <h1>{bio.h1}</h1>
            </div>
            <span className="p-C-about_text">
                <h2>{bio.h2}</h2>
                <p>{bio.p1}</p>
                <p>{bio.p2}</p>
                <img src={bio.img2Src} alt='mentoring photograph'/>
                <p>{bio.p3}</p>
            </span>
        </div>
    )
}