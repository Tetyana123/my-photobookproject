import React, {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/main/MainPage';
import StudioPage from './pages/studio/StudioPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import AppContext from "./AppContext";

function App() {
  const defaultContext = JSON.parse(localStorage.getItem('appContext')) || {
    cover: {
      title: '',
      subtitle: '',
      backgroundColor: '#ffffff',
      size: '',
    },
    pages: [],
  };

  const [ appContext, setAppContext ] = useState(defaultContext);

  useEffect(() => {
    localStorage.setItem('appContext', JSON.stringify(appContext));
  }, [appContext]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/studio",
      element: <StudioPage onChange={setAppContext} />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
  ]);

  return (
    <div className="App">
      <AppContext.Provider value={appContext}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;