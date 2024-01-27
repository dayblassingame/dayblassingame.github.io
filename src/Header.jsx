import React from "react";
import Logo from './images/logo.png';

export function Header(){
    return(
        <header className="p-C-header">
            <span className="p-C-logo_span ">
                <a href="#"><img src={Logo} alt="Logo" className="p-C-logo_img"/></a>
            </span>
            <div className="p-C-navBar">
                <span><a href=''>About</a></span>
                <span><a href=''>Projects</a></span>
                <span><a href=''>Contact</a></span>
            </div>
        </header>
    )
}