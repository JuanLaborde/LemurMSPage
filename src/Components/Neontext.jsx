import React from 'react'
import './Neontext.css';


function NeonText({ type, text, data }) {
    return (
        <section className='neon'>
            <span className='neon-wrapper'>
                <h1 className={type} data-content={data}>{text}</h1>
            </span>
        </section>
    )
}

export default NeonText