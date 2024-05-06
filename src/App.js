import React from 'react';
import {Header} from './Header';
import Hero from './Hero';
import './App.scss';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

export function App(){
    return(
        <div className='p-L-app'>
            <Header></Header>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}