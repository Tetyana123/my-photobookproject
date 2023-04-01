import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import HeaderMenu from '../HeaderNav';
import AppContext from '../../AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './StudioPage.css';

function StudioPage({ onChange }) {
  const appContext = useContext(AppContext);

  const handleChange = (field, value) => {
    onChange({
      ...appContext,
      cover: {
        ...appContext.cover,
        [field]: value,
      }
    });
  };

  return (
    <div className="studio">
      <header className="headline-header">
        <HeaderMenu/>
      </header>

      <main>
        <div>
          <div className="price-chekout">
            <h1 id="price-checkout"> 550 Sek </h1>
            <a
              id="checkout-button"
              href="/checkout"
            >
              Checkout
            </a>{' '}
          </div>

          <div className="list-option">
            <ol className="list">
              <li><a href="#">1. Design your cover</a></li>
              <li><a href="#">2. Add pages</a></li>
            </ol>
          </div>
          
         
          <div className="apply-cover-form">
            <div className="cover-by-photos">
              <div className="cover-page" style={{backgroundColor: appContext.cover.backgroundColor}}>
                <div className="cover-title">{appContext.cover.title}</div>
                <div className="cover-subtitle">{appContext.cover.subtitle}</div>
              </div>
            </div>

            <div className="option-photocover">
              <Form>
                <Form.Group>
                  <Form.Label className="size-title">Title</Form.Label>
                  <Form.Control          
                    type="text"
                    placeholder="Title"
                    value={appContext.cover.title}
                    onChange={(event) => handleChange('title', event.target.value)}
                  />
                  {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                           </Form.Text> */}
                </Form.Group>

                <Form.Group>
                  <Form.Label className="size-title">Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subtitle"
                    value={appContext.cover.subtitle}
                    onChange={(event) => handleChange('subtitle', event.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="theme" className="size-title">Background color</Form.Label>

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

                  <Form.Control
                    type="color"
                    placeholder="Background color"
                    value={appContext.cover.backgroundColor}
                    onChange={(event) => handleChange('backgroundColor', event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="size-title">Size</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={appContext.cover.size}
                    onChange={(event) => handleChange('size', event.target.value)}
                  >
                    <option>Open this select menu</option>
                    <option value="1">9×13</option>
                    <option value="2">10х15 (A6)</option>
                    <option value="3">13×18</option>
                    <option value="3">15×21 (A5)</option>
                    <option value="3">20×30 (A4)</option>
                    <option value="3">30×40</option>
                    <option value="3">30×45 (A3)</option>
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
