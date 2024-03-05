import React from 'react';
import Card from './Card';
import './Board.css';

export default function Board(props) {
    return (
        <div className='board'>
            {props.data.map(cardItemData => 
            <Card 
              key={cardItemData.id} 
              title={cardItemData.name} 
              imgUrl={cardItemData.filename} 
              cardId={cardItemData.id} 
              onCardClick={props.onCardClick} 
              />)}
        </div>
    )
}