import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCreateNew from './FormCreateNew';

const CreateNew = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
           Create New
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create a New</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <FormCreateNew />
                
            </Modal.Body>

          </Modal>
        </>
      );
}

export default CreateNew
