import React, { useState } from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { getRentBreakdown } from '../utils';

import './styles/ListContainer.scss';

const ListContainer = () => {
    const [listing, setListing] = useState([]);

    const getListing = () => {
        return listing;
    }

    const AddNewListing = (input) => {
        const data = getRentBreakdown(input['rent_amount'], input['num_tenants'], input['rent_period']);
        setListing(current => [...current, <Card data={data} cardIndex={getListing().length + 1} />]);
    }

    return(<div className="list_container">{getListing()}<AddCard OkClickHandler={AddNewListing} /></div>);
}

export default ListContainer;