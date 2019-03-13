import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

function TopMenu(props) {
		return (
			<div className="TopMenu">
					<div></div>
					<div className="TopMenu__Bottom--Logo"></div>

					<div className="TopMenu__Bottom__BtnContainer">
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/" exact>Home</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/properties">Properties</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/for-sale">For sale</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/to-rent">To rent</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/bond-calculator">Bond Calculator</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/about-us">About us</NavLink></div>
						<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/list-your-property">List Your Property</NavLink></div>
					</div>

					<div className="TopMenu__Bottom--Phone">+48 98 765 43 21</div>
					<div></div>
			</div>
		);
};

export default TopMenu;