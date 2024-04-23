import React from "react";
import ProjectCard from "./ProjectsCard";
import CapableTM from './images/CapableTM-mobile.jpg';
import CapableTMdesktop from './images/CapableTM.png';

export default function Projects(){

    return(
        <div className='p-L-projects_wrapper' id='projects'>
            <h1>Projects</h1>
            <ProjectCard
                name='CapableTM'
                imgPath={CapableTM}
                description='CapableTM is a kaban board constructed with ReactJS, Node.JS, and Sass.'
                siteLink=''
                gitLink='https://github.com/dayblassingame/CapableTM'
            />
        </div>
    );

}