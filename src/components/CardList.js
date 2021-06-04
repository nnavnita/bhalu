import React, { useState, useEffect } from 'react';
import Card from './Card';

import './styles/CardList.scss';

const CardList = (props) => {
    const links = props.listing();
    const [cards, setCards] = useState([]);
    
    const getCards = () => {
        return cards;
    }

    useEffect(() => {
        setCards(current => [...current, <Card text={links}/>]);
    },[links]
    );

    return(<div className="card_list">{getCards()}</div>);
}

export default CardList;