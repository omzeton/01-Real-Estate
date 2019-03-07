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
						<h2>Meet your new home</h2>
					</div>
				</div>

			{/* Should look similar to redwell estates form */}
				<SearchBar />

			{/* Three examples of properties, any properties */}
				<Featured />

			</div>
		);
	}
};

export default Home;