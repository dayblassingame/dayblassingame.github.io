import React from "react";

export default function Hero(){
    const mission  = 'I am here to curate bold, modern experiences that positively impact users of all demographics.';

    return(
        <div className="p-C-hero">
            <span className="p-C-hero_missionContainer">
                <h2>{mission}</h2>
            </span>
            <button> View Portfolio</button>
        </div>
    );
}