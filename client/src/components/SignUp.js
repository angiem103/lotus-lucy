import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./App";



function SignUp ({ onLogin }) {

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

    const {setCurrentUser, currentUser} = useContext(LoginContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

   function handleSubmit(e) {
        e.preventDefault()
        const customer = {
            name: name,
            phone_number: phoneNumber,
            email: email,
            address: address,
            username: username,
            password: password
        }

        fetch(`/customers`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(customer)
        })
        .then(r => {
            if(r.ok){
                r.json().then(setCurrentUser).then(navigate('/')).then(console.log(currentUser))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    };


    return (
        <div  className="row h-100 justify-content-center align-items-center" style={{paddingBottom: '10px', fontFamily: 'andale mono, monospace'}}>
            <h1 style={headerStyle}>SIGN UP</h1>
            <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone number" placeholder="Enter Phone Number"  onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Enter Address"onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
             </Button>
             <br></br>
             <ul style={{ color: "lightcoral", fontSize: "12px"}}>
                { errors ? errors.map((error) => <li>{error}</li>) : null}
             </ul>
            </Form>
        </div>
      );
}

export default SignUp;