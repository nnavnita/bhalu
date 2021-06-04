import React, { useState } from 'react';
import AddCard from './AddCard';
import CardList from './CardList';

import './styles/ListContainer.scss';

const ListContainer = () => {
    const [listing, setListing] = useState('');

    const getListing = () => {
        return listing;
    }

    const AddNewListing = (input) => {
        setListing(input);
    }

    return(<div className="list_container"><CardList listing={getListing} /><AddCard OkClickHandler={AddNewListing} /></div>);
}

export default ListContainer;