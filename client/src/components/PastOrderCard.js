import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function PastOrderCard( {order} ) {

    const captionStyle = {
        color: 'white',
        fontFamily: 'andale mono, monospace',
        fontSize: '20px',
    };

 
    const renderImg = order.products.map((product) => {
        return (
            <Carousel.Item key={product}>
                <img
                 style={{width: "100%", height: "450px"}}
                src={product.img}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={captionStyle}>{product.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        ) 
    });

    const renderText = order.order_details.map((details) => {
        const product = order.products.find(product => product.id === details.product_id)
        return (
            <Card.Text key={product.it}>
                {product.name} X {details.quantity}
                <p style={{fontSize: "15px"}}>Cost Per Item: ${product.price}</p>
            </Card.Text>
        )  

    });


  return (
    <Col>
        <Card style={{ width: '20rem', fontFamily: 'andale mono, monospace' }} bg='dark' text='light' >
        <Carousel>
            {renderImg}
        </Carousel>
        <Card.Body>
            <Card.Title>Order Number : {order.id}</Card.Title>
            {renderText}
        </Card.Body>
        <ListGroup className="list-group-flush" >
            <ListGroup.Item style={{backgroundColor:'darkgray'}}>Date Ordered: {order.order_date}</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'darkgray'}}>Total Cost: {order.total_cost}</ListGroup.Item>
        </ListGroup>
        </Card>
    </Col>
  );
}

export default PastOrderCard;