import React, { useState } from 'react';
import { IconButton, Icon } from 'rsuite';

import AddCardModal from './AddCardModal';
import './styles/AddCard.scss';

const AddCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({value: '', label: ''});
    
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

    const handleChangeLink = (input) => {
        setInput({value: input, label: 'link'});
    }

    const handleChangeRent = (input) => {
        setInput({value: input, label: 'rent'});
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
        <AddCardModal closeAddModal={closeAddModal} getShowModal={getShowModal} handleChangeLink={handleChangeLink} handleChangeRent={handleChangeRent}  AddClickHandler={AddClickHandler} />
    </div>);
}

export default AddCard;