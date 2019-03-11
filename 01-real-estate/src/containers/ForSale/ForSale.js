import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './ForSale.css';

class ForSale extends Component {
	
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