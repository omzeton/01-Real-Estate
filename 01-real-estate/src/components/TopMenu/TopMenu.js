import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../hamburgers.css';
import './TopMenu.css';

class TopMenu extends Component { 
	state = {
		open: false,
		smallDevice: true
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

		window.addEventListener('resize', () => {
			if( window.innerWidth > 768 ) {
				if ( this.state.smallDevice ) {
					console.log("bigger devices");
					this.setState({smallDevice: false});
				}
			} else {
				if ( !this.state.smallDevice ) {
					console.log("smaller devices");
					this.setState({smallDevice: true});
				}
			}
		});

		const style = this.state.open ? { height: '100vh' } : { height: '4em' }
		const burgerStyle = this.state.open ? ['hamburger', 'hamburger--squeeze', 'is-active'].join(' ') : ['hamburger', 'hamburger--squeeze'].join(' ');

		const responsiveMenu = this.state.responsive ? <div className="TopMenu" style={style}>
				<div className="TopMenu__Top">
					<div className="TopMenu__Top--Logo"></div>
					<div></div>
					<div className="TopMenu__Top--Burger" onClick={this.navHanlder}>
						<button className={burgerStyle} type="button">
						  <span className="hamburger-box">
						    <span className="hamburger-inner"></span>
						  </span>
						</button>
					</div>
				</div>
				<div className="TopMenu__Bottom">
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/" exact>Home</NavLink></div>
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/properties">Properties</NavLink></div>
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/for-sale">For sale</NavLink></div>
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/to-rent">To rent</NavLink></div>
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/about-us">About us</NavLink></div>
						<div className="TopMenu__Bottom--Btn"><NavLink onClick={this.closeNav} to="/list-your-property">List Your Property</NavLink></div>
				</div>
			</div> : null;


		return (
			<div>
				{responsiveMenu}
			</div>
		);
	}		
};

export default TopMenu;