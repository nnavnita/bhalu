import React, { useState } from 'react';
import AddCard from './AddCard';
import Card from './Card';

import './styles/ListContainer.scss';

const ListContainer = () => {
    const [listing, setListing] = useState([]);

    const getListing = () => {
        return listing;
    }

    const AddNewListing = (input) => {
        setListing(current => [...current, <Card text={input}/>]);
    }

    return(<div className="list_container">{getListing()}<AddCard OkClickHandler={AddNewListing} /></div>);
}

export default ListContainer;