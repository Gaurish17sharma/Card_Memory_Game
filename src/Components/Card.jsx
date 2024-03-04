import React from "react";
import './Card.css';

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt={props.title}/>
            <div className="card_title_container">
                <span className="card_title">{props.title.toUpperCase()}</span>
            </div>
        </div>
    )
}