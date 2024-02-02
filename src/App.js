import React from 'react';
import {Header} from './Header';
import Hero from './Hero';
import './App.scss';
import About from './About';

export function App(){
    return(
        <div>
            <Header></Header>
            <main>
                <div class="p-L-main_background">
                    <div class="p-L-main_background_line"></div>
                    <div class="p-L-main_background_line"></div>
                    <div class="p-L-main_background_line"></div>
                </div>
                <Hero className='p-L-hero'/>
                <About/>
            </main>
        </div>
    )
}