import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LinkButton from '../link-button/LinkButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMenu.css';

function HeaderMenu() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand  id="navar-brand" href="#">Logo</Navbar.Brand>
        <div className="price-checkout">
          <div className="price-checkout-value"> 550 Sek</div>
          <LinkButton link="/checkout">Checkout</LinkButton>
        </div>
        {/*<Navbar.Toggle aria-controls="navbarScroll" />
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
             </Form.Group>


        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
