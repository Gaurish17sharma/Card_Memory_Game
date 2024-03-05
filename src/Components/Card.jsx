import React from "react";
import './Card.css';

export default function Card(props) {
    return (
        <div className='card' onClick={() => props.onCardClick(props.cardId)}>
            <img src={props.imgUrl} alt={props.title} />
            <div className='card-title-container'>
                <span className='card-title'>{props.title.toUpperCase()}</span>
            </div>
        </div>
    )
}