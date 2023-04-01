import { useContext } from 'react';
import AppContext from '../../AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function CheckoutPage() {
  const appContext = useContext(AppContext);

  return (
    <div>
      {appContext.cover.title}
    </div>
  );
}

export default CheckoutPage;
