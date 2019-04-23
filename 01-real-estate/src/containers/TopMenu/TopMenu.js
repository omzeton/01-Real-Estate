import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../hamburgers.css';

if (window.msCrypto) {
	import('./TopMenu-ms.css');
} else {
	import('./TopMenu.css');
}

const topMenu = props => {

	const [modalState, setModalState] = useState({ open: false });

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});

	let smallDevice,
		containerWidth;

	const handleResize = () => {
		containerWidth = window.innerWidth;
		if (containerWidth > 768) {
			if (smallDevice) {
				smallDevice = false;
			}
		} else {
			if (!smallDevice) {
				smallDevice = true;
			}
		}
	};

	const navHanlder = () => {
		let toggle = modalState.open;
		return setModalState({ open: !toggle });
	}

	const closeNav = () => {
		let toggle = modalState.open;
		return setModalState({ open: !toggle });
	}

	handleResize();

	const style = modalState.open ? { height: '70vh' } : { height: '4em' }
	const burgerStyle = modalState.open ? ['hamburger', 'hamburger--squeeze', 'is-active'].join(' ') : ['hamburger', 'hamburger--squeeze'].join(' ');

	const smallMenu = <div className="Responsive-TopMenu" style={style}>
		<div className="Responsive-TopMenu__Top">
			<div className="Responsive-TopMenu__Top--Logo"></div>
			<div></div>
			<div className="Responsive-TopMenu__Top--Burger" onClick={navHanlder}>
				<button className={burgerStyle} type="button">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</div>
		<div className="Responsive-TopMenu__Bottom">
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/" exact>Home</NavLink></div>
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/properties">Properties</NavLink></div>
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/for-sale">For sale</NavLink></div>
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/to-rent">To rent</NavLink></div>
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/about-us">About us</NavLink></div>
			<div className="Responsive-TopMenu__Bottom--Btn"><NavLink onClick={closeNav} to="/list-your-property">List Your Property</NavLink></div>
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

	return (
		<div>
			{smallDevice ? smallMenu : bigMenu}
		</div>
	);
};

export default topMenu;