import React from "react";
import Logo from './images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header(){
    return(
        <header>
            <span>
                <img src={Logo} alt="Logo"/>
            </span>
            <span>
                <FontAwesomeIcon icon={faBars} />            
            </span>
            <span>
                <a href=''>Home</a>
                <a href=''>About Me</a>
                <a href=''>Projects</a>
                <a href=''>Contact</a>
            </span>
        </header>

    )
}