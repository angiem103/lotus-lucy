import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InfoContext } from './App';
import CartItems from './CartItems';

function Cart( {show, setShow} ) {

    const {products,cartItems, setCartItems} = useContext(InfoContext);


  const handleClose = () => setShow(false);
  const handleClearCart = () => setCartItems([]);

  const modalStyling = {
    backgroundColor: 'rgb(30, 31, 31)',
    color: "white",
    fontFamily: 'andale mono, monospace'
  };

  const renderCartItems = cartItems.map((item) => <CartItems key={item.id} item={item}/>)
  const cartCosts = cartItems.map((item) => {
    const product = products.find(product => product.id === item.product_id)
    return product.price * item.quantity
  })
  
  const cartTotal = cartCosts.reduce((prev, curr) => prev + curr, 0)
  console.log(cartCosts)
  console.log(cartTotal)

  return (

    <div >
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={modalStyling} >
            <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyling}>
            {renderCartItems}
            CART TOTAL: ${cartTotal}
        </Modal.Body>
        <Modal.Footer style={modalStyling}>
            <Button variant="outline-light" onClick={handleClearCart}>
            Clear Cart
            </Button>
            <Button variant="outline-light" onClick={handleClose}>
            Place Order
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
};

export default Cart;

