import React from 'react';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import Featured from '../../containers/Featured/Featured';
import './Home.css';

const home = (props) => {

	let location = 'home';

	return (
		<div className="Home">

			<div className="Home__ImgArea">
				<div className="Home__ImgArea--Img">
					<h2>Meet <span>your</span> new home!</h2>
				</div>
			</div>

			<SearchBar location={location} />

			<div className="Home__InfoArea">
				<h2>We know our real estate.</h2>
				<p>Dorion Estates is an established and fully independent Estate Agency based in Loremus. The Company was formed in 2002 and is currently headed by the Managing Director Dolor sit Amet, whose experience spans for over four decades of experience working in the property market.</p>
			</div>

			<Featured />

		</div>
	);
};

export default home;