import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp () {

    const formStyle = {
        backgroundColor: 'rgb(30, 31, 31)',
        width: '60%',

    }

    return (
        <div  class="row h-100 justify-content-center align-items-center">
        <Form style={formStyle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      );
}

export default SignUp;