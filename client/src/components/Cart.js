import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart( {show, setShow} ) {

  const handleClose = () => setShow(false);

  const modalStyling = {
    backgroundColor: 'rgb(30, 31, 31)',
    color: "white",
    fontFamily: 'andale mono, monospace'
  };


  return (

    <div >
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={modalStyling} >
            <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyling}>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer style={modalStyling}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
};

export default Cart;

