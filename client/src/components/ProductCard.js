import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { LoginContext } from './App';

function ProductCard( {product, cartItems, setCartItems} ) {

  const {currentUser} = useContext(LoginContext)

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
 
    const [isLoading, setLoading] = useState(false);
    const [qty, setQty] = useState();
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    function addToCart() {
      if (currentUser) {
      const item = {
        product_id: product.id,
        quantity: qty
      }
      setCartItems([...cartItems, item])
      setLoading(true)
      } 
    };
    

    return (
        <Col>
        <Card style={{ width: '22rem', height: '40rem',fontFamily: 'andale mono, monospace' }} bg='dark' text='light'>
        <Card.Img style={{ height: '27rem', objectFit: 'cover', alignContent: 'center' }}variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price: ${product.price}
          </Card.Text>
          { !currentUser ?
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">You Must Login To Order</Tooltip>}>
            <Button onClick={addToCart} variant='dark'>Add To Cart</Button>
            </OverlayTrigger> :
            <div>
              <InputGroup className="mb-3"  style={{paddingRight: '200px'}}>
                <InputGroup.Text>Qty</InputGroup.Text>
                <Form.Control type="email"  onChange={(e) => setQty(e.target.value)}/>
              </InputGroup >
              <Button onClick={!isLoading? addToCart : null} variant='dark'>{isLoading ? 'Added' : 'Add To Cart'}</Button>
          </div>
          }
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ProductCard;