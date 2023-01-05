import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container class="navbar-nav mr-auto">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>

          </Nav>
      </Container>
        <div>
      <Container class="navbar-nav ml-auto">
          <Nav Nav className="me-auto">
            <Nav.Link href="#home" >Login</Nav.Link>
            <Nav.Link href="#home" style={{width: '80px'}}>Sign Up</Nav.Link>
          </Nav>
      </Container>
      </div>

    </Navbar>

  );
};

export default NavBar;