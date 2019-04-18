import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RealEstate from './containers/RealEstate/RealEstate';
import firebase from '@firebase/app';

import './App.css';
import './responsive.css';

var config = {
    apiKey: "AIzaSyCeygcoPpSZ6ruHn45l63U80L8K-UQcR60",
    authDomain: "real-estate-d9a1e.firebaseapp.com",
    databaseURL: "https://real-estate-d9a1e.firebaseio.com",
    projectId: "real-estate-d9a1e",
    storageBucket: "real-estate-d9a1e.appspot.com",
    messagingSenderId: "1095628041476"
};
firebase.initializeApp(config);

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