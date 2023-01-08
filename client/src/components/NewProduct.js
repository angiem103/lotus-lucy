import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { InfoContext } from "./App";



function NewProduct () {

    const formStyle = {
        backgroundColor: 'rgb(30, 31, 31)',
        width: '50%',
        color: 'white',
        padding: '10px',
        borderRadius: '20px'
    };

    const headerStyle = {
        color: 'white',
        height: '150px',
        textAlign: 'center',
        paddingTop: '50px',
        fontFamily: 'andale mono, monospace',
        fontSize: '50px',
    };

    const {products,setProducts} = useContext(InfoContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState( );
    const [img, setImg] = useState('');
    const [errors, setErrors] = useState( );


   function handleSubmit(e) {
        e.preventDefault()
        const bouquet = {
            name: name,
            price: parseInt(price),
            img: img
        }

        fetch(`/products`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(bouquet)
        })
        .then(r => {
            if(r.ok){
                r.json().then(setProducts([...products,bouquet])).then(navigate('/'))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    };


    return (
        <div  className="row h-100 justify-content-center align-items-center" style={{paddingBottom: '10px', fontFamily: 'andale mono, monospace'}}>
            <h1 style={headerStyle}>ADD A NEW BOUQUET</h1>
            <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" placeholder="Enter Price"  onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
                <Form.Label>Image</Form.Label>
                <Form.Control type="img" placeholder="Enter Image URL"onChange={(e) => setImg(e.target.value)} />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
             </Button>
             <ul style={{ color: "lightcoral", fontSize: "12px", paddingTop: '10px'}}>
                { errors ? errors.map((error) => <li>{error}</li>) : null}
             </ul>
            </Form>
        </div>
      );
};

export default NewProduct;