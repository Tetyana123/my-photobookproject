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
                     <Form.Group >
                         <Form.Label className="size-title">Title</Form.Label>
                         <Form.Control type="text" placeholder="Title" />
                         {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                         </Form.Text> */}
                     </Form.Group>

                     <Form.Group>
                         <Form.Label className="size-title">Subtitle</Form.Label>
                         <Form.Control type="text" placeholder="Subtitle" />
                     </Form.Group>

                     <Form.Group >
                         <Form.Label for="theme" className="size-title">Background color</Form.Label>

                         {/* <select id="theme">
                          <option value="blue">blue</option>
                          <option value="yellow">yellow</option>
                         </select>

                        function update(bgColor, textColor) {
                                 html.style.backgroundColor = bgColor;
                                 html.style.color = textColor;
                                     }

                        select.onchange = function() {
                              ( select.value === 'blue' ) ? update('blue','yellow') : update('yellow','blue');
                                */}

                         <Form.Control type="color" placeholder="Background color" />
                     </Form.Group>
                     
                     <Form.Group className="mb-3">
                     <Form.Label className="size-title">Size</Form.Label>
                         <Form.Select aria-label="Default select example">
                          
                           <option>Open this select menu</option>
                           <option value="1">9×13</option>
                           <option value="2">10х15 (A6)</option>
                           <option value="3">13×18  </option>
                           <option value="4">15×21 (A5)</option>
                           <option value="5">20×30 (A4)</option>
                           <option value="6">30×40</option>
                           <option value="7">30×45 (A3)</option>
                         </Form.Select>
                     </Form.Group>

                     

                    </Form>

                    </div>
               </div>

        </div> 
        
      </main>

      
    </div>
  );
}

export default StudioPage;
