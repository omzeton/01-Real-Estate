import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RealEstate from './containers/RealEstate/RealEstate';
import firebase from '@firebase/app';
import firebaseConfig from './firebaseConfig';

import './App.css';

if (window.msCrypto) {
  import('./responsive-ms.css');
} else {
  import('./responsive.css');
}

firebase.initializeApp(firebaseConfig);

if (window.msCrypto) { console.log('ie11') };

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RealEstate />
      </BrowserRouter>
    );
  }
}

export default App;