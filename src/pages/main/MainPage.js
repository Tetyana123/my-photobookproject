import LinkButton from '../../components/link-button/LinkButton';

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
        <LinkButton link="/studio">Start creating</LinkButton>
      </div>
    </div>
  );
}

export default MainPage;

