import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/style.css'

function NavBar() {


  return (
    <>
        <Navbar variant="dark" id="navbar" style={{color:'white', backgroundColor:'black'}} sticky='top'>
          <Container style={{width:'82%'}}>
            <Navbar.Brand className="logo">
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#services" style={{color:'white'}}>Servicios</Nav.Link>
              <Nav.Link href="#information" style={{color:'white'}}>Empresa</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
