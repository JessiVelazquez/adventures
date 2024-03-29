import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import App from './app.js';
import './styles/style.scss';

function Main() {
  
  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header />
        </>
      ) : null }
      <App />
      <Footer id="footer"/>
    </BrowserRouter>
  )
}

export default Main;
