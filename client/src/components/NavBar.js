import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="navbar-nav mr-auto">
          <Nav className="me-auto">
            <Nav.Link href="/" >Shop</Nav.Link>
          </Nav>
      </Container>
        <div>
      <Container className="navbar-nav ml-auto">
          <Nav Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup" style={{width: '80px'}}>Sign Up</Nav.Link>
          </Nav>
      </Container>
      </div>

    </Navbar>

  );
};

export default NavBar;