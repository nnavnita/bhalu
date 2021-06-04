import React from 'react';
import AddCard from './AddCard';
import CardList from './CardList';

import './styles/ListContainer.scss';

const ListContainer = () => {
    return(<div class="list_container"><CardList /><AddCard /></div>);
}

export default ListContainer;