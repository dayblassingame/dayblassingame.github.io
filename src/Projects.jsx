import React from "react";
import ProjectCard from "./ProjectsCard";
import CraftedCocktails from './images/craftedcocktails.png';
import CraftedMobile from './images/CraftedMobile.png';

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
                            mobileImgPath={CraftedMobile}
                            description= {'Crafted Cocktails is a single-page web application that aims to transform an extensive collection of cocktail recipes'
                            + 'into a visually appealing, user-friendly, accessible interface. ' + 
                            'It features a robust search functionality, carousels, and a hash router to ensure seamless navigation and improve user engagement.'}
                            siteLink='https://dayblassingame.github.io/Crafted'
                            gitLink='https://github.com/dayblassingame/Crafted'
                            tools={['React', 'JavaScript', 'Sass', 'API integration', 'Webpack', 'NPM']}
                        />
                    </ul>
                </div>
        </div>
    );

}