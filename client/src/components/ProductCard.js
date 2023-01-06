import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProductCard( {product} ) {

  
    return (
        <Col>
        <Card style={{ width: '22rem', height: '35rem',fontFamily: 'andale mono, monospace' }} bg='dark' text='light'>
        <Card.Img style={{ height: '27rem', objectFit: 'cover', alignContent: 'center' }}variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
            <Button onClick={addToCart}variant='dark'>Add To Cart</Button>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ProductCard;