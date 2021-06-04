import React, { useState } from 'react';
import { IconButton, Icon, Modal, Button } from 'rsuite';

const AddCard = () => {
    const [showModal, setShowModal] = useState(false);

    const openAddModal = () => {
        setShowModal(true);
    }

    const closeAddModal = () => {
        setShowModal(false);
    }

    const getShowModal = () => {
        return showModal;
    }

    return (<div class="add_card">
        <IconButton 
            icon={<Icon icon="plus" />}
            circle
            size="lg"
            onClick={openAddModal}
        />
        <Modal show={getShowModal()} onHide={closeAddModal}>
        <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={closeAddModal} appearance="primary">
              Ok
            </Button>
            <Button onClick={closeAddModal} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
    </div>);
}

export default AddCard;