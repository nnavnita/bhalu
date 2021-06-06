import React from 'react';
import { Modal, Form, FormControl, FormGroup, Button, InputPicker, InputNumber } from 'rsuite';

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
                <div className='modal_wrapper'>
                <FormGroup className='txt_rent'>
                    <FormControl placeholder='Enter rent amount' onChange={props.handleChange.bind(this, 'rent_amount')} />
                    <InputPicker data={rentData} defaultValue={ 'per week' } onChange={props.handleChange.bind(this, 'rent_period')} />
                </FormGroup>
                </div>
                <div className='modal_wrapper'>
                <FormGroup className='txt_rent'>
                <InputNumber step={1} />
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