import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Login () {

    const formStyle = {
        backgroundColor: 'rgb(30, 31, 31)',
        width: '40%',
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
    const [error, setError] = useState('');

   function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type' : "application/json"
            },
            body:JSON.stringify({username, password})
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(r =>console.log(r))
            } else {
                r.json(). then((data) => setError(data.error.login))
            }
        })
    };


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
             <br></br>
             <p style={{ color: "lightcoral", fontSize: "12px"}}>
                {error}
             </p>
            </Form>
        </div>
      );
}

export default Login;