import React from "react";

export default function Footer(){

    return(
        <div id='footer' className="p-C-footer_wrapper">
            <h5>Explore</h5>
            <span className="p-C-footer_navLinks">
                <a href="#about" data-testid='navLink'>About</a>
                <a href="#" data-testid='navLink'>Projects</a>
                <a href="contact" data-testid='navLink'>Contact</a>
            </span>
            <h5>Legal</h5>
            <span className="p-C-footer_legal">
                <a data-testid='license' href="https://www.apache.org/licenses/">License</a>
                <p>Hand Crafted By Me</p>
            </span>
        </div>
    )
}