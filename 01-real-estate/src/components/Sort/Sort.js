import React from 'react';
import { Link } from 'react-router-dom';
import './Sort.css';

function Sort(props) {
	return(
		<div className="Sort">
			<div className="Sort__Container">
				<div className="Sort__Container--Header">
					<h2>All Properties (1 - {props.split} of {props.maxAmount} Properties: <Link to="/">previous</Link> | <Link to="/">next</Link>)</h2>
				</div>
				<div></div>
				<div className="Sort__Container--Filter">
					<h2>Sort by: </h2>
					  <select name="filter">
						    <option value="priceLow">Price: lowest to highest</option>
						    <option value="priceHigh">Price: highest to lowest</option>
						    <option value="bedsLow">Beds: least to most</option>
						    <option value="bedsHigh">Beds: most to last</option>
					  </select>
				</div>
			</div>
		</div>
	);
}

export default Sort;