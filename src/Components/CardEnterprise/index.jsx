import React from 'react'
import './style.css'

export default function CardEnterprise({props}) {
    return (
        <div className={`card-entp-container ${props.first && 'img-one'} ${props.second && 'img-two'} ${props.third && 'img-third'}`}>
            <div className="card-entp-content">
                <div className="card-entp-text">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="card-entp-btn">
                    <p>Conhecer produtos</p>
                </div>
            </div>
        </div>
    )
}
