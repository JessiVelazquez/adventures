import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import store from './store';
import Main from './main.js';

function Entry() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain="dev-jessi.us.auth0.com"
        clientId="KzUdC6SFLVzCc50oMA4BQQ5CFCDIKbmC"
        redirectURI={window.location.origin}
      >
        <Main />
      </Auth0Provider>
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);