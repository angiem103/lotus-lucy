import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Login () {

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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

   function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }

        fetch(`/customers`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(r => {
            if(r.ok){
                r.json(console.log(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }


    return (
        <div  className="row h-100 justify-content-center align-items-center" style={{paddingBottom: '10px', fontFamily: 'andale mono, monospace'}}>
            <h1 style={headerStyle}>LOG IN</h1>
            <Form style={formStyle} onSubmit={handleSubmit}>
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
                {errors.map((error) => <li>{error}</li>)}
             </ul>
            </Form>
        </div>
      );
}

export default Login;