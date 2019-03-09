import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RealEstate from './containers/RealEstate/RealEstate';

import './App.css';

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