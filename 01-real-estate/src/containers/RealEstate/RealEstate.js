import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import Home from '../Home/Home';
import Footer from '../../components/Footer/Footer';

class RealEstate extends Component {
	render() {
		return (
			<div className="RealEstate">
				{/* Menu stays on top no matter what */}
				<TopMenu />

				{/* Outputted dynamically */}
				<Home />

				{/* Footer stays on bottom no matter what */}
				<Footer />

			</div>
		);
	}
};

export default RealEstate;