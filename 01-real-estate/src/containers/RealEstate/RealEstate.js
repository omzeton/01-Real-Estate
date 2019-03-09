import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ListYourProperty from '../ListYourProperty/ListYourProperty';
import ForSale from '../ForSale/ForSale';
import Bond from '../Bond/Bond';
import ToRent from '../ToRent/ToRent';
import Footer from '../../components/Footer/Footer';

import { Route } from 'react-router-dom';

class RealEstate extends Component {
	render() {
		return (
			<div className="RealEstate">
				{/* Menu stays on top no matter what */}
				<TopMenu />

				{/* Outputted dynamically */}
				<Route path="/" exact component={Home}/>
				<Route path="/for-sale" component={ForSale}/>
				<Route path="/to-rent" component={ToRent}/>
				<Route path="/bond-calculator" exact component={Bond}/>
				<Route path="/about-us" exact component={About}/>
				<Route path="/contact" exact component={Contact}/>
				<Route path="/list-your-property" exact component={ListYourProperty}/>

				{/* Footer stays on bottom no matter what */}
				<Footer />

			</div>
		);
	}
};

export default RealEstate;