import React from 'react';
import './Scoreboard.css';

export default function Scoreboard(props) {
    return (
        <div className='scoreboard'>
            <div className='current-score'>Current score: {props.currentScore}</div>
            <div className='best-score'>Best score: {props.bestScore}</div>
        </div>
    )
}