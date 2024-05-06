import React from "react";

export default function ProjectCard (props){
    const name = props.name;
    const description = props.description;
    const imgPath = props.imgPath;
    const siteLink = props.siteLink;
    const gitLink = props.gitLink;
    
    return(
        <div className="p-C-projectCard_wrapper">
            <div className="p-C-projectCard_img_container">
                <img src={imgPath} alt={name + ' project'} />
            </div> 
            <h4>{name}</h4>

            <p>{description}</p>
            <span>
                <button className={siteLink==='' ? 'disabled' : ''} href={siteLink}>Live Site</button>
                <button href={gitLink}>Learn More</button>
            </span>
        </div>
    )
}