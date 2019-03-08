import React, { Component } from 'react';
import './TopMenu.css';

class TopMenu extends Component {
	render() {
		return (
			<div className="TopMenu">
					<div></div>
					<div className="TopMenu__Bottom--Logo"></div>

					<div className="TopMenu__Bottom__BtnContainer">
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">Home</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">For sale</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">To rent</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">Bond Calculator</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">About us</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">Contact</a></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><a href="localhost:3000">List Your Property</a></div>
					</div>

					<div className="TopMenu__Bottom--Phone">+48 98 765 43 21</div>
					<div></div>
			</div>
		);
	}
};

export default TopMenu;