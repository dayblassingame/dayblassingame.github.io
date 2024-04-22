import React from "react";
import Logo from './images/logo.png';

export function Header(){
    return(
        <header className="p-C-header">
            <span className="p-C-logo_span ">
                <a href="#"><img src={Logo} alt="Logo" className="p-C-logo_img"/></a>
            </span>
            <nav className="p-C-navBar">
                <span><a href='#about'>About</a></span>
                <span><a href=''>Projects</a></span>
                <span><a href='#contact'>Contact</a></span>
            </nav>
        </header>
    )
}