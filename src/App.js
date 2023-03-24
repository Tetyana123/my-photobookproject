import './App.css';
// import background from './images/album.jpg';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // <Container fluid="md" >
    // <Row>
    // <Col>
    <div className="App">
      {/* <div  style={{ backgroundImage:`url(${background})` }} className="Background">   */}
        
        <h1 className="Headline">
          Create your <br/> personalised <br/> photobook
        </h1>
        
        <h1 className="Subtitle">
          Here you can breathe new life <br/> into your favorite photos
        </h1>

        {/* <Button variant="primary" size="lg"
        >Start creating</Button>{' '} */}
         <div className="Link">
           <a
          className="Button-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start creating
        </a>
        </div>
      </div>
    // </div>
    // </Col> 
    // </Row>
    // </Container>
  );
}

export default App;
