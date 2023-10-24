import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

function Card({ props }) {

    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    

    useEffect(() => {
        const handleScroll = () => {
            setLastScrollY(scrollY);
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const currentClass = scrollY > lastScrollY ? 'class2' : 'class1';

    return (
        <div className={`card-container ${props.color == 'green' && 'green'}`}>
            <div className="card-img">
                <div className={`top ${props.fixPosition && 'fix'} ${currentClass}`}>
                    <img src={props.imgTwo} alt="" />
                </div>
                <div className={`down ${props.fixPosition && 'fixCard'}`}>
                    <img src={props.imgOne} alt="" />
                </div>

            </div>
            <div className={`card-content ${props.fixPosition && 'black'}`}>
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="card-subtitle">
                    <p>{props.subOne}<br /> {props.subTwo}</p>
                </div>
                <div className="card-btn">Conhecer produto</div>
            </div>

        </div>
    )
}

export default Card