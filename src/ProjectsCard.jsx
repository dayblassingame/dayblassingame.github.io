import React from "react";

export default function ProjectCard (props){
    const name = props.name;
    const description = props.description;
    const imgPath = props.imgPath;
    const siteLink = props.siteLink;
    const gitLink = props.gitLink;
    const features = props.features;
    
    return(
        <div className="p-C-projectCard_wrapper">
            <h2>{name}</h2>

            <img src={imgPath} alt={name + ' project'} />
            <p>{description}</p>

            <ul>
                {features.map((feature)=>(
                    <li>{feature}</li>
                    ))}
            </ul>
            <span>
                <a className={siteLink==='' ? 'disabled' : ''} href={siteLink}>View Site</a>
                <a href={gitLink}>View Code</a>
            </span>
        </div>
    )
}