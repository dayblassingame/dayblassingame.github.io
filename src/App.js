import React, { useEffect, useState } from 'react';
import {Header} from './Header';
import Hero from './Hero';
import './App.scss';
import About from './About';
import Loading from './Loading';

export function App(){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[])

    return(
        loading ? 
        <Loading/> :
        <div className='p-L-app'>
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