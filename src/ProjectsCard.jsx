import React from "react";

export default function ProjectCard (props){
    const name = props.name;
    const description = props.description;
    const imgPath = props.imgPath;
    const siteLink = props.siteLink;
    const gitLink = props.gitLink;
    const tools = props.tools;
    
    return(
        <div className="p-C-projectCard_wrapper">
            <div className="p-C-projectCard_img_container">
                <img src={imgPath} alt={name + ' project'} />
            </div> 
            <span className="p-C-projectCard_info_container">
                <h3>{name}</h3>
                <p>{description}</p>

                <ul>
                    {tools.map((item) =>(
                        <li id='tools'>{item}</li>
                    ))}
                </ul>
                <span>
                    <a className={siteLink==='' ? 'p-L-section_button disabled' : 'p-L-section_button'} href={siteLink}>Live Site</a>
                    <a className={gitLink==='' ? 'p-L-section_button disabled' : 'p-L-section_button'} href={gitLink}>Learn More</a>
                </span>
            </span>
        </div>
    )
}