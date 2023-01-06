import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InfoContext, LoginContext } from './App';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';

function Cart( {show, setShow} ) {

  const {currentUser} = useContext(LoginContext);
  const {products, cartItems, setCartItems} = useContext(InfoContext);
  const navigate = useNavigate()

  const handleClearCart = () => setCartItems([]);

  function handlePlacedOrder() {
    setShow(false)

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const newOrder = {
        customer_id: currentUser.id,
        order_date: date,
    }
        

    fetch('/orders', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newOrder)
    })
    .then(r => r.json())
    .then(ord => {      
       cartItems.forEach((item) => {
            const obj = {
                product_id: item.product_id,
                order_id: ord.id,
                quantity: item.quantity,
            }
            console.log(ord.id)
            console.log(obj)
            fetch('/order_details', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(r => r.json())
            .then(r => {
                console.log(r)
                navigate('/myorders')
            })
        }
    )}
    )

  }

  const modalStyling = {
    backgroundColor: 'rgb(30, 31, 31)',
    color: "white",
    fontFamily: 'andale mono, monospace'
  };

  const renderCartItems = cartItems.map((item) => <CartItems item={item}/>)
  const cartCosts = cartItems.map((item) => {
    const product = products.find(product => product.id === item.product_id)
    return product.price * item.quantity
  })
  
  const cartTotal = cartCosts.reduce((prev, curr) => prev + curr, 0)


  return (

    <div >
        <Modal show={show} onHide={() => setShow(false)} >
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
            <Button variant="outline-light" onClick={handlePlacedOrder}>
            Place Order
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
};

export default Cart;
