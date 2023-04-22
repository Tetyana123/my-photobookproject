import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import localforage from "localforage";
import Form from 'react-bootstrap/Form';
import Button from '../../components/button/Button';
// import Button from 'react-bootstrap/Button';

import AppContext from '../../AppContext';
import HeaderMenu1 from '../../components/header-menu/HeaderMenu1';
import IconArrowLeft from '../../components/icon-arrow-left/IconArrowLeft';
// import LinkButton from '../../components/link-button/LinkButton';


import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutPage.css';



function CheckoutPage() {
  const appContext = useContext(AppContext);
  const [ formFields, setFormFields ] = useState({
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardDate: '',
    cardCvv: '',
  });

  const handleChange = (fieldName, fieldValue) => {
    setFormFields({
      ...formFields,
      [fieldName]: fieldValue,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localforage.removeItem('appContext');
    window.location.href = '/order-confirmation';
  }

  return (
    <div>
       <header className="headline-header">
         <HeaderMenu1/>
          {/* <HeaderMenu className={withoutCheckout}/> */}
       </header> 

       <main>
         <div className="cover-title-checkout">
          {appContext.cover.title} (my album)
         </div>

         <div className="checkout-form">
           <Link className="back-mainpage" to="/studio">
             <IconArrowLeft/>
             <span> Back to design </span>
           </Link>

           <Form
             className="checkout"
             onSubmit={handleSubmit}
           >
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                type="email"
                value={formFields.email}
                onChange={(event) => handleChange('email', event.target.value)}
                placeholder="Enter email"
                required
               />
               <Form.Text className="text-muted">
                We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicTel">
               <Form.Label>Phone</Form.Label>
               <Form.Control
                 type="tel"
                 placeholder="(123) 456-7890"
                 pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}"
                 value={formFields.phone}
                 onChange={(event) => handleChange('phone', event.target.value)}
                 required
               />
               <Form.Text className="text-muted">
                Format: (123) 456-7890
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="1234 Main St"
                 value={formFields.address}
                 onChange={(event) => handleChange('address', event.target.value)}
                 required
               />
               <Form.Text className="text-muted">
                Format: 1234 Main St
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Card details</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="XXXX-XXXX-XXXX-XXXX"
                 pattern="[0-9]{4}[ -][0-9]{4}[ -][0-9]{4}[ -][0-9]{4}"
                 maxLength="19"
                 value={formFields.cardNumber}
                 onChange={(event) => handleChange('cardNumber', event.target.value)}
                 required
               />
               <Form.Text className="text-muted">
                Format: XXXX-XXXX-XXXX-XXXX
               </Form.Text>
               <div className="card-details">
                 <div className="card-details-date">
                  <Form.Control
                   type="text"
                   placeholder="XX/XX"
                   pattern="[0-9]{2}[ /][0-9]{2}"
                   maxLength="5"
                   value={formFields.cardDate}
                   onChange={(event) => handleChange('cardDate', event.target.value)}
                   required
                  />
                  <Form.Text className="text-muted">
                   Format: XX/XX
                  </Form.Text>
                 </div>
                 <div className="card-details-date">
                  <Form.Control
                   type="text"
                   placeholder="XXX"
                   pattern="[0-9]{3}"
                   maxLength="3"
                   value={formFields.cardCvv}
                   onChange={(event) => handleChange('cardCvv', event.target.value)}
                   required
                  />
                  <Form.Text className="text-muted">
                   Format: XXX
                  </Form.Text>
                 </div>
               </div>
             </Form.Group>

             <Button type="submit" href="/order-confirmetion">Complete the order</Button>
           </Form>
         </div>
       </main>
    </div>
  );
}

export default CheckoutPage;
