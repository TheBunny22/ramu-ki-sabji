import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function MenuItemDis(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 

  // Listen for changes in the 'showModal' prop from outside
  React.useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.modalContent} {/* Display content from props */}
        I will not close if you click outside me. Don't even try to press
        the escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuItemDis;
