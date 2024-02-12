import React from "react";
import Logo from './images/logo.png';

export default function Loading(){
    
    return(
        <div className="p-C-loadingSpinner_wrapper">
            <img src={Logo} alt="loading logo spinner" />
        </div>
    )
}