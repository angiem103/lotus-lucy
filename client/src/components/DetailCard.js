import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/esm/Button";
import { FiTrash2 } from "react-icons/fi";

function DetailCard( {details} ) {

    const [updatedQty, setUpdatedQty] = useState(details.quantity)
    const [updatedDetail, setUpdatedDetail] = useState("hi")

    function handleDetailDelete(){
        setUpdatedDetail()
        console.log(updatedDetail)
    }

    return (
        <div>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>{details.product.name} </Form.Label>
            <InputGroup className="mb-3" >
                <InputGroup.Text>Quantity</InputGroup.Text>
                <Form.Control defaultValue={updatedQty} onChange={ (e) => setUpdatedQty(e.target.value)}/>
            </InputGroup>
            <Button onClick={handleDetailDelete}><FiTrash2/></Button>
        </Form.Group>
        </div>
    )

}

export default DetailCard;