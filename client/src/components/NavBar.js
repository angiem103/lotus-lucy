import React, { useContext } from 'react';
import { LoginContext } from './App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";





function NavBar() {

    const {currentUser,setCurrentUser} = useContext(LoginContext); 
    const navigate = useNavigate()

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
      <Container >
          <Nav>
            <Nav.Link href="/">Shop</Nav.Link>
          </Nav>
      </Container>
      <div>
        <Container className="navbar-nav ml-auto">
            {currentUser ? 
                <Nav Nav className="me-auto">
                    <Nav.Link href="/myorders" style={{width: '100px'}}>My Orders</Nav.Link>
                    <Button onClick={handleLogout} variant='dark'>Logout</Button>
                    <Nav.Link style={{color: 'white'}}> <FiShoppingCart /></Nav.Link>
               </Nav>
             : 
                <Nav Nav className="me-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup" style={{width: '75px'}}>Sign Up</Nav.Link>
                    <Nav.Link style={{color: 'white'}}> <FiShoppingCart /></Nav.Link>
                </Nav>
            }
        </Container>
      </div>
    </Navbar>

  );
};

export default NavBar;