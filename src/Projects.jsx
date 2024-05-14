import React from "react";
import ProjectCard from "./ProjectsCard";
import CapableTMdesktop from './images/CapableTM.png';

export default function Projects(){

    return(
        <div className='p-L-section_wrapper p-C-background_teal' id='projects'>
                <div className='p-C-projects'>
                    <div className="p-L-heading_border_vanilla">
                        <h3 className='p-L-section_h3'> Projects</h3>
                    </div>
                    <ul>
                        <ProjectCard
                            name='CapableTM'
                            imgPath={CapableTMdesktop}
                            description='CapableTM is a kaban board constructed with ReactJS, Node.JS, and Sass technologies.'
                            siteLink=''
                            gitLink='https://github.com/dayblassingame/CapableTM'
                        />
                    </ul>
                </div>
        </div>
    );

}