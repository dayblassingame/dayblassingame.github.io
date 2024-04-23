import React from "react";

export default function ProjectCard (props){
    const name = props.name;
    const description = props.description;
    const imgPath = props.imgPath;
    const siteLink = props.siteLink;
    const gitLink = props.gitLink;
    
    return(
        <div className="p-C-projectCard_wrapper">
            <h2>{name}</h2>

            <img src={imgPath} alt={name + ' project'} />
            <p>{description}</p>
            <span>
                <a className={siteLink==='' ? 'disabled' : siteLink} href={siteLink}>Live Site</a>
                <a href={gitLink}>Learn More</a>
            </span>
        </div>
    )
}