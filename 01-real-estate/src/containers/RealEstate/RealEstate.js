import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import Home from '../Home/Home';

class RealEstate extends Component {
	render() {
		return (
			<div className="RealEstate">
				{/* Menu stays on top no matter what */}
				<TopMenu />

				{/* Outputted dynamically */}
				<Home />

			</div>
		);
	}
};

export default RealEstate;