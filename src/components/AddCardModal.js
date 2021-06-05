import React from 'react';
import { Modal, Form, FormControl, FormGroup, Button, InputPicker } from 'rsuite';

import './styles/AddCardModal.scss';

const AddCardModal = (props) => {
    const rentData = [
        { 'label': 'per day', 'value': 'per day'},
        { 'label': 'per week', 'value': 'per week'},
        { 'label': 'per fortnight', 'value': 'per fortnight'},
        { 'label': 'per month', 'value': 'per month'},
        { 'label': 'per year', 'value': 'per year'}
    ];
    return (<Modal show={props.getShowModal()} onHide={props.closeAddModal}>
            <Modal.Header>
                <Modal.Title style={{textAlign: 'center', fontWeight: '1px'}}>Add Rental Listing for Comparison</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form fluid>
                <FormGroup className='input_link'>
                    <FormControl placeholder='Enter link of rental listing' onChange={props.handleChangeLink.bind(this)} />
                </FormGroup>
                <div className='sidelines'><span className='text'>OR</span></div>
                <div className='manual_entry_wrapper'>
                <FormGroup className='manual_entry'>
                    <FormControl placeholder='Enter rent amount' onChange={props.handleChangeRent.bind(this)} />
                    <InputPicker data={rentData} defaultValue={ 'per week' } />
                </FormGroup>
                </div>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.AddClickHandler} appearance="primary">
                Add
                </Button>
                <Button onClick={props.closeAddModal} appearance="subtle">
                Cancel
                </Button>
            </Modal.Footer>
    </Modal>);
}

export default AddCardModal;