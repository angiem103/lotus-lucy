import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { InfoContext, LoginContext } from './App';
import CartItems from './CartItems';

function Cart( {show, setShow} ) {

  const {currentUser, setUserOrders, userOrders} = useContext(LoginContext);
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
        item_details: cartItems
    }

    console.log(newOrder)

    fetch('/orders', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newOrder)
    })
    .then(r => r.json())
    .then(newOrd => {
      if (userOrders){
      setUserOrders([...userOrders, newOrd])
      navigate('/myorders')
      } else {
        setUserOrders(newOrd)
        navigate('/myorders')
      }
    })

  }


  const renderCartItems = cartItems.map((item) => <CartItems item={item}/>)
  const cartCosts = cartItems.map((item) => {
    const product = products.find(product => product.id === item.product_id)
    return product.price * item.quantity
  })
  
  const cartTotal = cartCosts.reduce((prev, curr) => prev + curr, 0)


  const modalStyling = {
    backgroundColor: 'rgb(30, 31, 31)',
    color: "white",
    fontFamily: 'andale mono, monospace'
  };

  return currentUser ? (

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
  ) : 
  <div >
      <Modal show={show} onHide={() => setShow(false)} >
      <Modal.Header closeButton style={modalStyling} >
          <Modal.Title>You Must Login or Sign Up</Modal.Title>
      </Modal.Header>
      </Modal>
  </div>
};

export default Cart;

