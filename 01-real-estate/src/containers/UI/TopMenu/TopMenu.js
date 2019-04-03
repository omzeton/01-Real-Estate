import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../hamburgers.css';
import './TopMenu.css';

class TopMenu extends Component { 
	state = {
		open: false
	}

	navHanlder = () => {
		let toggle = this.state.open;
		this.setState({open: !toggle});
	}

	closeNav = () => {
		let toggle = this.state.open;
		this.setState({open: !toggle});
	}

	render() {

		let smallDevice;

		// Check window's inner width when Loading the page first time
		if( window.innerWidth > 768 ) {
			smallDevice = false;
		} else {
			smallDevice = true;
		}

		// Check window's inner width when Resizing the page
		window.addEventListener('resize', () => {
			if( window.innerWidth > 768 ) {
				console.log('big screen');
				smallDevice = false;
				console.log(smallDevice);
			} else {
				console.log('small screen');
				smallDevice = true;
				console.log(smallDevice);
			}
		});

		const style = this.state.open ? { height: '70vh' } : { height: '4em' }
		const burgerStyle = this.state.open ? ['hamburger', 'hamburger--squeeze', 'is-active'].join(' ') : ['hamburger', 'hamburger--squeeze'].join(' ');

		const smallMenu = <div className="Responsive-TopMenu" style={style}>
				<div className="Responsive-TopMenu__Top">
					<div className="Responsive-TopMenu__Top--Logo"></div>
					<div></div>
					<div className="Responsive-TopMenu__Top--Burger" onClick={this.navHanlder}>
						<button className={burgerStyle} type="button">
						  <span className="hamburger-box">
						    <span className="hamburger-inner"></span>
						  </span>
						</button>
					</div>
				</div>
				<div className="Responsive-TopMenu__Bottom">
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/" exact>Home</NavLink></div>
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/properties">Properties</NavLink></div>
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/for-sale">For sale</NavLink></div>
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/to-rent">To rent</NavLink></div>
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/about-us">About us</NavLink></div>
						<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/list-your-property">List Your Property</NavLink></div>
				</div>
			</div>;

		const bigMenu = <div className="TopMenu">
							<div></div>
							<div className="TopMenu__Bottom--Logo"></div>

							<div className="TopMenu__Bottom__BtnContainer">
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/" exact>Home</NavLink></div>
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/properties">Properties</NavLink></div>
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/for-sale">For sale</NavLink></div>
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/to-rent">To rent</NavLink></div>
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/about-us">About us</NavLink></div>
								<div className="TopMenu__Bottom__BtnContainer--Btn"><NavLink to="/list-your-property">List Your Property</NavLink></div>
							</div>

							<div className="TopMenu__Bottom--Phone">+48 98 765 43 21</div>
							<div></div>
					</div>;

		let responsiveMenu;

		if ( smallDevice ) {
			responsiveMenu = smallMenu;
		} else {
			responsiveMenu = bigMenu;
		}


		return (
			<div>
				{responsiveMenu}
			</div>
		);
	}		
};

export default TopMenu;