import React from 'react';
import CardItem from './CardItem';

const CardList = ({cards}) => (
    <div>
        {cards.map( card => {
            return (
                <CardItem style={{margin:10}} card={card}/>
            );
        })}
    </div>
);

export default CardList;