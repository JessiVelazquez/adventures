import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import App from './app.js';

function Main() {
  

  return (
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  )
}

export default Main;
