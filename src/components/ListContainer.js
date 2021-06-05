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
            const cardText = <div className='rent_details'>
                Per day: {data.daily}<br />
                Per week: {data.base}<br />
                Per fortnight: {data.base * 2}<br />
                Per month: {data.monthly}<br />
                Per year: {data.yearly}<br />
            </div>;
            setListing(current => [...current, <Card text={cardText} />]);
        } else {
            setListing(current => [...current, <Card text={input.value}/>]);
        }
    }

    return(<div className="list_container">{getListing()}<AddCard OkClickHandler={AddNewListing} /></div>);
}

export default ListContainer;