import React, { useState } from 'react';
import { IconButton, Icon } from 'rsuite';

import AddCardModal from './AddCardModal';
import './styles/AddCard.scss';

const AddCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({'rent_period': 'per week', 'num_tenants': 1});
    
    const openAddModal = () => {
        setShowModal(true);
    }

    const closeAddModal = () => {
        setShowModal(false);
    }

    const getShowModal = () => {
        return showModal;
    }

    const getInput = () => {
        return input;
    }

    const handleChange = (key, value) => {
        let _input = input;
        if (key === 'num_tenants')
            _input[key] = parseInt(value);
        else
            _input[key] = value;
        setInput(_input);
    }

    const AddClickHandler = () => {
        closeAddModal();
        props.OkClickHandler(getInput());
    }

    return (<div className="add_card">
        <IconButton 
            icon={<Icon icon="plus" />}
            circle
            size="lg"
            onClick={openAddModal}
        />
        <AddCardModal closeAddModal={closeAddModal} getShowModal={getShowModal} handleChange={handleChange}  AddClickHandler={AddClickHandler} />
    </div>);
}

export default AddCard;