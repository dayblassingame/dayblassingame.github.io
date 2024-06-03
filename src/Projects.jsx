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
                            description= {'Crafted Cocktails is a web app that aims to transform an extensive collection of cocktail recipes'
                            + 'into a visually appealing, user-friendly, accessible interface.' + 
                            'It features a robust search functionality, categorization of recipes, Thecocktaildb.com api intergration constructed using ReactJS, Sass, JS, and HTML'}
                            siteLink=''
                            gitLink=''
                        />
                    </ul>
                </div>
        </div>
    );

}