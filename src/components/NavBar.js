import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {


  return (
    <>
        <Navbar bg="primary" variant="dark" id="navbar" style={{color:'white'}}>
          <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Nav>
              <Nav.Link href="#information" style={{color:'white'}}>Quienes Somos</Nav.Link>
              <Nav.Link href="#services" style={{color:'white'}}>Servicios</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
