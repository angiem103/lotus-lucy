import React, { useContext } from 'react';
import { LoginContext } from './App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Navigate, useNavigate } from 'react-router-dom';




function NavBar() {

    const {currentUser,setCurrentUser} = useContext(LoginContext); 
    const navigate = useNavigate()
    console.log(currentUser)

    function handleLogout() {
        fetch('/logout', {method: "DELETE"})
        .then(r => {
            if (r.ok) {
                setCurrentUser(null)
                navigate('/')
            }
        })
    };

  return (
    <Navbar bg="dark" variant="dark" >
      <Container className="navbar-nav mr-auto">
          <Nav className="me-auto" >
            <Nav.Link href="/" >Shop</Nav.Link>
          </Nav>
      </Container>
      <div>
        <Container className="navbar-nav ml-auto">
            {currentUser ? 
                <Nav Nav className="me-auto">
                    <Nav.Link href="/myorders" style={{width: '100px'}}>My Orders</Nav.Link>
                    <Button onClick={handleLogout} variant='dark'>Logout</Button>
               </Nav>
             : 
                <Nav Nav className="me-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup" style={{width: '80px'}}>Sign Up</Nav.Link>
                </Nav>
            }
        </Container>
      </div>
    </Navbar>

  );
};

export default NavBar;