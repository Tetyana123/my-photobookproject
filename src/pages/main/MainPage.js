import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MainPage() {
  return (
    <div className="main-page">
      <h1 className="headline">
        Create your <br/> personalised <br/> photobook
      </h1>
      <div className="content">
        <h2 className="subtitle">
          Here you can breathe new life <br/> into your favorite photos
        </h2>
        <div className="link">
          <a
            className="button-link"
            href="/studio"
          >
            Start creating
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

