import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMenu.css';
import logo from  "../../images/logo-removebg-preview.png";

function HeaderMenu1({ price }) {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand  id="navar-brand" href="/" >
          <img src={logo} alt="logo" className="logotype"/>
          My Photobook
        </Navbar.Brand>
        <div className="price-checkout">
          <div className="price-checkout-value">
            Price = {price} Sek
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
export default HeaderMenu1;
