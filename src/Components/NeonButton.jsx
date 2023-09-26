import React from 'react'
import './Neonbutton.css';

function NeonButton({type, text}) {
    return (
        <a href='#' className= {type}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text}
        </a>
    )
}

export default NeonButton