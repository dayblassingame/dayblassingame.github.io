import React from "react";
import ProjectCard from "./ProjectsCard";
import CapableTM from './images/CapableTM-mobile.jpg';
import CapableTMdesktop from './images/CapableTM.png';

export default function Projects(){

    return(
        <div className='p-L-projects_wrapper' id='projects'>
            <h1>Work</h1>
            <ProjectCard
                name='CapableTM'
                imgPath={CapableTM}
                desktopImgPath={CapableTMdesktop}
                description='CapableTM is a task manager feature I designed and developed in October of 2023.'
                features={['ReactJs', 'Sass', 'Responsive']}
                siteLink=''
                gitLink='https://github.com/dayblassingame/CapableTM'
            />
        </div>
    );

}