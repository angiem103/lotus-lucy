import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ProductCard( {product} ) {
    return (
        <Col>
        <Card>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ProductCard;