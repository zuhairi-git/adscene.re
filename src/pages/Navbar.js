import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";

function BasicExample() {
  return (
    <Navbar sticky="top" className='p-3' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">AD SCENE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;