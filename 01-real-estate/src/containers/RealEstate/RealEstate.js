import React, { Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu';
import Home from '../Home/Home';
import Properties from '../Properties/Properties';
import About from '../../components/About/About';
import ListYourProperty from '../ListYourProperty/ListYourProperty';
import ForSale from '../ForSale/ForSale';
import Bond from '../../components/Bond/Bond';
import ResultBig from '../ResultBig/ResultBig';
import ToRent from '../ToRent/ToRent';
import Footer from '../../components/Footer/Footer';

import { Route } from 'react-router-dom';

class RealEstate extends Component {
	render() {
		return (
			<div className="RealEstate">
				<TopMenu />

					<Route path="/" exact component={Home}/>
					<Route path="/properties" exact component={Properties}/>
					<Route path="/for-sale" exact component={ForSale}/>
					<Route path="/to-rent" exact component={ToRent}/>
					<Route path="/bond-calculator" exact component={Bond}/>
					<Route path="/about-us" exact component={About}/>
					<Route path="/list-your-property" exact component={ListYourProperty}/>

					<Route path="/properties/:id" component={ResultBig}/>
					<Route path="/for-sale/:id" component={ResultBig}/>
					<Route path="/to-rent/:id" component={ResultBig}/>

				<Footer />

			</div>
		);
	}
};

export default RealEstate;