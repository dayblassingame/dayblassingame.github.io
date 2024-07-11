import React from "react";
import ProjectCard from "./ProjectsCard";
import CraftedCocktails from './images/craftedcocktails.png';
import CraftedMobile from './images/CraftedMobile.png';
import Skycast from './images/skycastweb.png';
import SkycastMobile from './images/skycastmobile.png';

export default function Projects(){

    return(
        <div className='p-L-section_wrapper p-C-background_teal' id='projects'>
                <div className='p-C-projects'>
                    <div className="p-L-heading_border_vanilla">
                        <h4 className='p-L-section_h4'> Projects</h4>
                        <p>A collection of my work.</p>
                    </div>
                    <ul>
                        <ProjectCard
                            name='Crafted Cocktails'
                            imgPath={CraftedCocktails}
                            mobileImgPath={CraftedMobile}
                            description= {`Crafted Cocktails is a user-friendly SPA where users can view and search their favorite cocktails.`}
                            siteLink='https://dayblassingame.github.io/Crafted'
                            gitLink='https://github.com/dayblassingame/Crafted'
                            tools={['React', 'JavaScript', 'Sass', 'API integration', 'Webpack', 'NPM']}
                        />
                        <ProjectCard
                            name='SkyCast'
                            imgPath={Skycast}
                            mobileImgPath={SkycastMobile}
                            description= {`SkyCast Weather App is a sleek and intuitive application designed to provide users with real-time weather information for any location worldwide. `}
                            siteLink='https://sky-cast-theta.vercel.app/'
                            gitLink='https://github.com/dayblassingame/SkyCast'
                            tools={['Next.js', 'React', 'JavaScript', 'Sass']}
                        />
                    </ul>
                </div>
        </div>
    );

}