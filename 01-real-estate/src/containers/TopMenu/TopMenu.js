import React, { Component } from 'react';
import './TopMenu.css';

class TopMenu extends Component {
	render() {
		return (
			<div className="TopMenu">
					<div></div>
					<div className="TopMenu__Bottom--Logo"></div>

					<div className="TopMenu__Bottom__BtnContainer">
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">Home</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">For sale</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">To rent</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">Bond Calculator</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">About us</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">Contact</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="#">List Your Property</a></div>
					</div>

					<div className="TopMenu__Bottom--Phone">+48 98 765 43 21</div>
					<div></div>
			</div>
		);
	}
};

export default TopMenu;