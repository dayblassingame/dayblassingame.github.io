import React from "react";
import ProjectCard from "./ProjectsCard";
import CraftedCocktails from './images/CraftedCocktails.png';
import Portfolio from './images/portfolio.png'

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
                            description= {'Crafted Cocktails is a mutli-page web application that aims to transform an extensive collection of cocktail recipes'
                            + 'into a visually appealing, user-friendly, accessible interface. ' + 
                            'It features a robust search functionality, carousels, and a hash router to ensure seamless navigation and improve user engagement.'}
                            siteLink='https://dayblassingame.github.io/Crafted'
                            gitLink=''
                            tools={['React', 'JavaScript', 'Sass', 'API integration', 'Webpack', 'NPM']}
                        />
                        <ProjectCard
                            name='Portfolio'
                            imgPath={Portfolio}
                            description= {'Single page application constructed to showcase my projects. This application includes a controlled form that validates user data before sending it to Firebase.'}
                            siteLink='https://dayblassingame.github.io/'
                            gitLink=''
                            tools={['React', 'JavaScript', 'Sass', 'Firebase', 'Webpack', 'NPM' ]}
                        />
                    </ul>
                </div>
        </div>
    );

}