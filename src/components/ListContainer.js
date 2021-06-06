import React, { useState } from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { getDetailsFromWeeklyRent } from '../utils';

import './styles/ListContainer.scss';

const ListContainer = () => {
    const [listing, setListing] = useState([]);

    const getListing = () => {
        return listing;
    }

    const AddNewListing = (input) => {
        if (input.label === 'rent') {
            const data = getDetailsFromWeeklyRent(input.value, 'weekly');
            setListing(current => [...current, <Card data={data} />]);
        } else {
            setListing(current => [...current, <Card text={input.value}/>]);
        }
    }

    return(<div className="list_container">{getListing()}<AddCard OkClickHandler={AddNewListing} /></div>);
}

export default ListContainer;