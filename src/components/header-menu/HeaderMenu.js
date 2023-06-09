import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LinkButton from '../link-button/LinkButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMenu.css';
import logo from  "../../images/logo-removebg-preview.png";
import { useContext } from 'react';
import AppContext from '../../AppContext';

function HeaderMenu() {
  const appContext = useContext(AppContext);

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand  id="navar-brand" href="/" >
          <img src={logo} alt="logo" className="logotype"/>
          My Photobook
        </Navbar.Brand>
        <div className="price-checkout">
          <div className="price-checkout-value">
            Price = {appContext.price} Sek
          </div>
          <LinkButton link="/checkout">Checkout</LinkButton>
        </div>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
