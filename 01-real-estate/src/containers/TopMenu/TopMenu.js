import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {
	render() {
		return (
			<div className="TopMenu">
					<div></div>
					<div className="TopMenu__Bottom--Logo"></div>

					<div className="TopMenu__Bottom__BtnContainer">
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/">Home</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/properties">Properties</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/for-sale">For sale</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/to-rent">To rent</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/bond-calculator">Bond Calculator</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/about-us">About us</Link></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><Link to="/list-your-property">List Your Property</Link></div>
					</div>

					<div className="TopMenu__Bottom--Phone">+48 98 765 43 21</div>
					<div></div>
			</div>
		);
	}
};

export default TopMenu;