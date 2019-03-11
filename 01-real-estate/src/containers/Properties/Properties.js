import React, { Component } from 'react';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Result from '../../components/Result/Result';
import { Link } from 'react-router-dom';
import './Properties.css';

class Properties extends Component {
	state = {
		instance: [
			{id: 1260, price: "$ 650 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1260"},
			{id: 1261, price: "$ 950 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1261"},
			{id: 1262, price: "$ 150 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1262"},
			{id: 1263, price: "$ 70 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1263"},
			{id: 1264, price: "$ 10 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1264"},
			{id: 1265, price: "$ 1 250 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1265"},
			{id: 1266, price: "$ 350 000", name: "Duplex for Sale",	info: "info", size: "60m2", ref: "#1266"},
		]
	}
	
	sortResults = () => {
		let totalAmount = this.state.instance.length;
		let sorted;
		if(totalAmount >= 10) {
			sorted = 10;
		} else {
			sorted = totalAmount;
		}
		return sorted;
	}

	render() {

		const results = this.state.instance.map(result => {
			return <Result key={result.id} price={result.price} name={result.name} info={result.info} size={result.size} ref={result.ref}/>  
		});

		return (
			<div className="Properties">
				<SearchBar/>

				<div className="Sort">
					<div className="Sort__Container">
						<div className="Sort__Container--Header">
							<h2>All Properties (1 - {this.sortResults()} of {this.state.totalAmount} Properties: <Link to="/">previous</Link> | <Link to="/">next</Link>)</h2>
						</div>
						<div></div>
						<div className="Sort__Container--Filter">
							<h2>Sort by: </h2>
							  <select name="filter">
								    <option value="new">Newest first</option>
								    <option value="old">Oldest first</option>
								    <option value="priceLow">Price: lowest to highest</option>
								    <option value="priceHigh">Price: highest to lowest</option>
							  </select>
						</div>
					</div>
				</div>		

				{/* Generate 7 examples */}
				{results}
			</div>
		);
	}
};

export default Properties;