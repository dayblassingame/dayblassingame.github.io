import React from "react";
import ProjectCard from "./ProjectsCard";
import CraftedCocktails from './images/CraftedCocktails.png';

export default function Projects(){

    return(
        <div className='p-L-section_wrapper p-C-background_teal' id='projects'>
                <div className='p-C-projects'>
                    <div className="p-L-heading_border_vanilla">
                        <h4 className='p-L-section_h4'> /projects</h4>
                        <p>A collection of my best work.</p>
                    </div>
                    <ul>
                        <ProjectCard
                            name='Crafted Cocktails'
                            imgPath={CraftedCocktails}
                            description= {'The cocktail website aims to provide an extensive collection of cocktail recipes, mixology tips, and related information.'
                            + 'The website is designed to be visually appealing, user-friendly, and accessible on various devices.' + 
                            'It features a robust search functionality, categorization of recipes, user accounts, and social media integration.'}
                            siteLink=''
                            gitLink=''
                        />
                    </ul>
                </div>
        </div>
    );

}