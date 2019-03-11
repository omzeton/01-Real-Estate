import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

class ToRent extends Component {
	render() {
		return (
			<div className="ToRent">
				<SearchBar/>
				<h2>To Rent</h2>
			</div>
		);
	}
};

export default ToRent;