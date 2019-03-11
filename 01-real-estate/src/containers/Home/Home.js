import React, { Component } from 'react';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Featured from '../../components/Featured/Featured';
import './Home.css';

class Home extends Component {

	state = {
		imgClass: "Home__ImgArea--Img"
	}

	componentDidMount () {
		this.img1.style.opacity = 1;
	}

	render() {

		return (
			<div className="Home">

				<div className="Home__ImgArea">
					<div className={this.state.imgClass} ref={(div) => {this.img1 = div}}>
						<h2>Meet your new <span>home</span>.</h2>
					</div>

					<div className={this.state.imgClass} ref={(div) => {this.img2 = div}}>
						<h2>Let's find a new <span>house</span>.</h2>
					</div>

					<div className={this.state.imgClass} ref={(div) => {this.img3 = div}}>
						<h2>The search is <span>over</span>.</h2>
					</div>
				</div>

				<SearchBar />

				<div className="Home__InfoArea">
					<h2>We know our real estate.</h2>
					<p>Dorion Estates is an established and fully independent Estate Agency based in Loremus. The Company was formed in 2002 and is currently headed by the Managing Director Dolor sit Amet, whose experience spans for over four decades of experience working in the property market.</p>
				</div>

				<Featured />

			</div>
		);
	}
};

export default Home;