import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import App from './app.js';
import './styles/style.scss';

function Main() {
  

  return (
    <BrowserRouter>
      <Header />
      <App />
      <Footer id="footer"/>
    </BrowserRouter>
  )
}

export default Main;
