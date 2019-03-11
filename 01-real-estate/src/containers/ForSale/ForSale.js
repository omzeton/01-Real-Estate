import React, { Component } from 'react';
import SearchBar from '../../containers/SearchBar/SearchBar';
import axios from 'axios';
import './ForSale.css';

class ForSale extends Component {

	componentDidMount () {
		axios.get('https://real-estate-d9a1e.firebaseio.com/examples.json')
			.then(response => {
				this.setState({samples: response.data});
			});
	}
	
	render() {

		return (
			<div className="ForSale">
				<SearchBar/>
				<h2>For Sale</h2>
			</div>
		);
	}
};

export default ForSale;