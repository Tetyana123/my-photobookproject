import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from '../HeaderNav';
import Button from 'react-bootstrap/Button'
import './StudioPage.css';
import Form from 'react-bootstrap/Form';


function StudioPage() {
  return (
    <div className="studio">
      
      {/* <h1 className="headline"> */}
      <header className="headline-header">
        <HeaderMenu/>
      </header>

      <main>
        <div>
               <div className="price-chekout">
                  <h1 id="price-checkout"> 550 Sek </h1>
                  <Button id="checkout-button" 
                    >
                      Checkout
                  </Button>{' '}
               </div>
               
               <div className="list-option">
                  <ol class="list">
                   <li><a href="#">1. Design your cover</a></li>
                   <li><a href="#">2. Add pages</a></li>
                  </ol>
               </div>

              <div className="apply-cover-form">
                    <div className="cover-by-photos">
                         <div className="cover-page">

                         </div>
                    </div>

                    <div className="option-photocover">
                    <Form>
                     <Form.Group className="mb-3" >
                         <Form.Label>Title</Form.Label>
                         <Form.Control type="text" placeholder="Title" />
                         {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                         </Form.Text> */}
                     </Form.Group>

                     <Form.Group className="mb-3" >
                         <Form.Label>Subtitle</Form.Label>
                         <Form.Control type="text" placeholder="Subtitle" />
                     </Form.Group>

                     <Form.Group className="mb-3">
                         <Form.Label for="theme">Background color</Form.Label>
                         
                         <Form.Control type="text" placeholder="Background color" />
                               
                     </Form.Group>
                     
                     <Form.Group className="mb-3">
                     <Form.Label>Size</Form.Label>
                         <Form.Select aria-label="Default select example">
                           <option>Open this select menu</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                         </Form.Select>
                     </Form.Group>

                     {/* <Form.Group className="mb-3">
                         <Form.Label>Size</Form.Label>
                         <Form.Control type="text" placeholder="Size" />
                     </Form.Group>    */}
                     
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>

                     <Button variant="primary" type="submit">
                         Submit
                     </Button> */}

                    </Form>

                    </div>
               </div>

        </div> 
        
      </main>

      
    </div>
  );
}

export default StudioPage;
