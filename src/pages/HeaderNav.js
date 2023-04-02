// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderNav.css';

function HeaderMenu() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand  id="navar-brand" href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="pages-navbar"
            // className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '50px' }}
            
          >
            <Nav.Link className="nav-link"  href="/">Home</Nav.Link>
            <Nav.Link className="nav-link"  href="/">Pricing</Nav.Link>
            
          </Nav>

          <div id="button-sign">
              <a 
                href='/Register'
              >
                Sign up 
              </a>
          </div>

          <div id="button-login">
              <a
                href="#"
              >
                Login
              </a>
          </div>


{/*           
             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Control type="password" placeholder="Sign Up" />
             </Form.Group>


             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Control type="password" placeholder="Login" />
             </Form.Group> */}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;