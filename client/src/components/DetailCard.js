import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/esm/Button";
import { FiTrash2 } from "react-icons/fi";

function DetailCard( {details, order} ) {


    function handleUpdatedDet(e) {
        details.quantity = parseInt(e.target.value)
        console.log(order)
    }

    
    return (
        <div>
        <Form.Group className="mb-3" controlId="orderDetail">
            <Form.Label>{details.product.name} </Form.Label>
            <InputGroup className="mb-3" >
                <InputGroup.Text>Quantity</InputGroup.Text>
                <Form.Control defaultValue={details.quantity} onChange={handleUpdatedDet}/>
            </InputGroup>
            <Button><FiTrash2/></Button>
        </Form.Group>
        </div>
    )

}

export default DetailCard;