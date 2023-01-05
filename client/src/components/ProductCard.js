import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ProductCard( {product} ) {
    return (
        <Col>
        <Card style={{ width: '22rem', height: '35rem',fontFamily: 'baskervile, serif' }} bg='dark' text='light'>
        <Card.Img style={{ height: '27rem', objectFit: 'cover', alignContent: 'center' }}variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ProductCard;