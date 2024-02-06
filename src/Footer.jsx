import React from "react";

export default function Footer(){

    return(
        <div id='footer' className="p-C-footer_wrapper">
            <h4>Explore Day Blassingame</h4>
            <span className="p-C-footer_navLinks">
                <a href="#about">About</a>
                <a href="#">Portfolio</a>
                <a href="contact">Contact</a>
            </span>
            <h4>Legal</h4>
            <span className="p-C-footer_legal">
                <a href="https://www.apache.org/licenses/">License</a>
                <p>@2024 Day Blassingame</p>
            </span>
        </div>
    )
}