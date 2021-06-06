import React from 'react';
import { Modal, Form, Icon, FormControl, DatePicker, FormGroup, Button, InputPicker, InputNumber } from 'rsuite';

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
                Rent Amount
                <FormGroup className='txt_rent'>
                    <FormControl placeholder='Enter rent amount' onChange={props.handleChange.bind(this, 'rent_amount')} />
                    <InputPicker data={rentData} defaultValue={ 'per week' } onChange={props.handleChange.bind(this, 'rent_period')} />
                </FormGroup>
                </div>
                <div className='modal_wrapper'>
                Number of Tenants
                <FormGroup className='txt_rent'>
                    <InputNumber style={{width: '4rem'}} defaultValue={1} min={1} onChange={props.handleChange.bind(this, 'num_tenants')} />
                </FormGroup>
                </div>
                <div className='modal_wrapper'>
                Available from
                <FormGroup className='txt_rent'>
                    <DatePicker defaultValue={new Date()} onChange={props.handleChange.bind(this, 'available_date')} />
                </FormGroup>
                </div>
                <div className='modal_wrapper'>
                Features
                <FormGroup className='txt_rent'>
                    <InputNumber style={{width: '6rem'}} defaultValue={1} min={0} prefix={<Icon icon="bed" />} onChange={props.handleChange.bind(this, 'bed')}/>
                    <InputNumber style={{width: '6rem'}} defaultValue={1} min={0} prefix={<Icon icon="shower" />} onChange={props.handleChange.bind(this, 'bath')}/>
                    <InputNumber style={{width: '6rem'}} defaultValue={1} min={0} prefix={<Icon icon="car" />} onChange={props.handleChange.bind(this, 'car')}/>
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