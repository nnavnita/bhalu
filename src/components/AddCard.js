import React, { useState } from 'react';
import { IconButton, Icon, Modal, Form, FormControl, FormGroup, Button } from 'rsuite';

import './styles/AddCard.scss';

const AddCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState();
    
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

    const handleChange = (input) => {
        setInput(input);
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
        <Modal show={getShowModal()} onHide={closeAddModal}>
            <Modal.Header>
                <Modal.Title>Rental Listing for Comparison</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form fluid><FormGroup>
            <FormControl onChange={handleChange.bind(this)} />
            </FormGroup></Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={AddClickHandler} appearance="primary">
                Add
                </Button>
                <Button onClick={closeAddModal} appearance="subtle">
                Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </div>);
}

export default AddCard;