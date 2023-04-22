import React, {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import localforage from "localforage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/main/MainPage';
import StudioPage from './pages/studio/StudioPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CompletePage from './pages/order-confirmation/CompletePage';
import AppContext from "./AppContext";
// import Register from './pages/Register';

function App() {
  const [ appContext, setAppContext ] = useState({
    cover: {
      title: '',
      subtitle: '',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    pages: [],
    size: '5',
    price: 500,
  });

  useEffect( () => {
    localforage.getItem('appContext')
      .then((previousContext) => {
        if (previousContext) {
          setAppContext(JSON.parse(previousContext));
        }
      });
  }, []);

  useEffect(() => {
    localforage.setItem('appContext', JSON.stringify(appContext));
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
    {
      path: "/order-confirmation",
      element: <CompletePage />,
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
