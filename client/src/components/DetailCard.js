import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function DetailCard( {details} ) {

    const [updatedQty, setUpdatedQty] = useState(details.quantity)
    console.log(updatedQty)

    return (
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>{details.product.name} </Form.Label>
            <img src={details.product.image} />
            <InputGroup className="mb-3" >
                <InputGroup.Text>Quantity</InputGroup.Text>
                <Form.Control defaultValue={updatedQty} onChange={ (e) => setUpdatedQty(e.target.value)}/>
            </InputGroup>
        </Form.Group>
    )

}

export default DetailCard;