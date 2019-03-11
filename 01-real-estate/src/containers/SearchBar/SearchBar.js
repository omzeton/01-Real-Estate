import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {

	onClick = () => {
		console.log(this.type.value);
		console.log(this.beds.value);
		console.log(this.minprice.value);
		console.log(this.maxprice.value);
		console.log(this.suburb.value);
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar__FormContainer">
						<div className="SearchBar__FormContainer--header">
							<h2>Start browsing</h2>
						</div>

						<div className="SearchBar__FormContainer--form">
							 <div>
								  <h3>Type</h3>
								  <select name="type" ref={(select) => {this.type = select}}>
									    <option value="house">House</option>
									    <option value="bungalow">Bungalow</option>
									    <option value="apartment">Apartment</option>
									    <option value="comproperty">Commercial Property</option>
									    <option value="indproperty">Industrial Property</option>
								  </select>
							 </div>

							  <div>
								  <h3>Beds</h3>
								  <select name="beds" ref={(select) => {this.beds = select}}>
								  	    <option value="1+">1+</option>
								  	    <option value="2+">2+</option>
								  	    <option value="3+">3+</option>
								  	    <option value="4+">4+</option>
								  </select>
							 </div>

							  <div>
								  <h3>Min Price</h3>
								  <select name="minprice" ref={(select) => {this.minprice = select}}>
									    <option value="nomin">No Minimum</option>
									    <option value="100min">100 000$</option>
									    <option value="200min">200 000$</option>
									    <option value="300min">300 000$</option>
									    <option value="400min">400 000$</option>
									    <option value="500min">500 000$</option>
									    <option value="600min">600 000$</option>
									    <option value="700min">700 000$</option>
									    <option value="800min">800 000$</option>
									    <option value="900min">900 000$</option>
								  </select>
							 </div>

							  <div>
								  <h3>Max Price</h3>
								  <select name="maxprice" ref={(select) => {this.maxprice = select}}>
									    <option value="nomax">No Minimum</option>
									    <option value="100max">100 000$</option>
									    <option value="200max">200 000$</option>
									    <option value="300max">300 000$</option>
									    <option value="400max">400 000$</option>
									    <option value="500max">500 000$</option>
									    <option value="600max">600 000$</option>
									    <option value="700max">700 000$</option>
									    <option value="800max">800 000$</option>
									    <option value="900max">900 000$</option>
								  </select>
							 </div>

							  <div>
								  <h3>Suburb</h3>
								  <input type="text" name="suburb" ref={(input) => {this.suburb = input}}/>
							 </div>

							 <div>
							 	  <input type="submit" value="Submit" onClick={this.onClick}/>
							 </div>
						</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;