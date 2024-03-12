import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand to="#">Priyank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="About">About</Link></Nav.Link>
          </Nav>
          <Button variant="dark">
            <FaMoon />
            </Button>
          </Navbar.Collapse>
          </Container>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-primary mx-2" type='submit'>Search</Button>
          </Form>
    </Navbar>
    </>
  )
}

export default Navigation
