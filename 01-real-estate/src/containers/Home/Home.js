import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Featured from '../../components/Featured/Featured';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="Home">

				<div className="Home__ImgArea">
					{/* Populate this area with 3 imgs and create a slideshow, each with different h2 tag */}
					<div className="Home__ImgArea--Img">
						<h2>Meet your new <span>home</span>.</h2>
					</div>
				</div>

				<SearchBar />

				<div className="Home__InfoArea">
					<h2>We know our real estate.</h2>
					<p>Dorion Estates is an established and fully independent Estate Agency based in Loremus. The Company was formed in 2002 and is currently headed by the Managing Director Dolor sit Amet, whose experience spans for over four decades of experience working in the property market.</p>
				</div>

				{/* Three examples of properties, any properties
					Use www.promaqproperties.co.za as an example
				 */}
				<Featured />

			</div>
		);
	}
};

export default Home;