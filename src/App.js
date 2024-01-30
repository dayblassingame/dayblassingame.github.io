import React from 'react';
import {Header} from './Header';
import Hero from './Hero';
import './App.scss'

export function App(){
    return(
        <div>
            <Header></Header>
            <main>
                <Hero/>
            </main>
        </div>
    )
}