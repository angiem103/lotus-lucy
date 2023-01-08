import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


function PastOrderCard( {order, onOrderDelete} ) {

    const captionStyle = {
        color: 'white',
        fontFamily: 'andale mono, monospace',
        fontSize: '20px',
    };

    const navigate = useNavigate()

    const renderImg = order.products.map((product) => {
        return (
            <Carousel.Item key={product.id}>
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
        return (
            <Card.Text key={details.id}>
                {details.product.name} X {details.quantity}
                <br></br>
                <span style={{fontSize: "15px"}}>Cost Per Item: ${details.product.price}</span>
            </Card.Text>
        )  

    });

    function handleOrderDelete() {
        fetch(`/orders/${order.id}`, {
            method: "DELETE"
        }).then(()=> {
            onOrderDelete(order)
        });
    }

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
            <ListGroup.Item style={{backgroundColor:'darkgray'}}>Total Cost: ${order.total_cost}</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'darkgray'}}>
                <Button variant='dark' onClick={() => navigate(`/editorder/${order.id}`)}>Change Order</Button>
                <Button variant='dark' style={{marginLeft: '3.5px'}} onClick={handleOrderDelete}>Delete Order</Button>
            </ListGroup.Item>
        </ListGroup>
        </Card>
    </Col>
  );
}

export default PastOrderCard;