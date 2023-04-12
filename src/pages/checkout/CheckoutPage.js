import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from '../../components/button/Button';
// import Button from 'react-bootstrap/Button';

import AppContext from '../../AppContext';
import HeaderMenu from '../../components/header-menu/HeaderMenu';
import IconArrowLeft from '../../components/icon-arrow-left/IconArrowLeft';
import LinkButton from '../../components/link-button/LinkButton';


import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutPage.css';
import { Link } from 'react-router-dom';


function CheckoutPage() {
  const appContext = useContext(AppContext);

  return (
    <div>
       <header className="headline-header">
         <HeaderMenu/>
       </header> 

       <main>
         <div className="cover-title-checkout">
          {appContext.cover.title} (my album)
         </div>

         <div className="checkout-form">
           <Link className="back-mainpage" to="/">
             <IconArrowLeft/>
             <span> Back to disign </span>
           </Link>

           <Form className="checkout">
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicTel">
               <Form.Label>Phone</Form.Label>
               <Form.Control type="tel" placeholder="123-456-7890" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" required/>
               <Form.Text className="text-muted">
                Format: 123-456-7890
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control type="text" placeholder="1234 Main St"/>
               <Form.Text className="text-muted">
                Format: 1234 Main St
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Card details</Form.Label>
               <Form.Control type="text" placeholder="XXXX-XXXX-XXXX-XXXX" maxlength="14"/>
               <Form.Text className="text-muted">
                Format: XXXX-XXXX-XXXX-XXXX
               </Form.Text>
             </Form.Group>

             <LinkButton link="/studio">Complete the order</LinkButton> 
             
           </Form>

           



      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> */}
    
    
         </div>
       </main>
      
       

       {/* <LinkButton link="/studio">
       <IconArrowLeft /> Back to disign
       </LinkButton> */}
       {/* <Navbar.Brand  id="navar-brand" href="/" >
          <img src={logo} alt="logo" className="logotype"/>
          My Photobook
        </Navbar.Brand> */}

      
       
    </div>
  );
}

export default CheckoutPage;
