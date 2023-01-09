import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { LoginContext } from './App';

function ProductCard( {product, cartItems, setCartItems} ) {

  const {currentUser} = useContext(LoginContext)

    function addToCart() {
      if (currentUser) {
      const item = {
        product_id: product.id,
        quantity: 1
      }
      setCartItems([...cartItems, item])
      } 
    };
    

    return (
        <Col>
        <Card style={{ width: '22rem', height: '35rem',fontFamily: 'andale mono, monospace' }} bg='dark' text='light'>
        <Card.Img style={{ height: '27rem', objectFit: 'cover', alignContent: 'center' }}variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          { !currentUser ?
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">You Must Login To Order</Tooltip>}>
            <Button onClick={addToCart} variant='dark'>Add To Cart</Button>
            </OverlayTrigger> :
          <Button onClick={addToCart} variant='dark'>Add To Cart</Button>
          }
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ProductCard;