import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import './SearchBar.css';

class SearchBar extends Component {

	onClick = () => {
		let newArr = [];
		let type = this.type.value;
		let beds = this.beds.value;
		let minprice = this.minprice.value;
		let maxprice = this.maxprice.value;
		let suburb = this.suburb.value;
		newArr.push(type, beds, minprice, maxprice, suburb);
		this.props.onFetchSearchData(newArr); 
	}

	render() {
		let style = null;
		if (this.props.location === 'home') {
			style = {
				marginTop: '-10em'
			}
		} else if (this.props.location === 'properties') {
			style = {
				marginTop: '0em'
			}
		}
		return (
			<div className="SearchBar">
				<div className="SearchBar__FormContainer" style={style}>
						<div className="SearchBar__FormContainer--header">
							<h2>Start browsing</h2>
						</div>

						<div className="SearchBar__FormContainer--form">
							 <div>
								  <h3>Type</h3>
								  <select name="type" ref={(select) => {this.type = select}}>
									    <option value={false}>Any Type</option>
									    <option value="house">House</option>
									    <option value="bungalow">Bungalow</option>
									    <option value="apartment">Apartment</option>
									    <option value="commercial property">Commercial Property</option>
									    <option value="industrial property">Industrial Property</option>
								  </select>
							 </div>

							  <div>
								  <h3>Beds</h3>
								  <select name="beds" ref={(select) => {this.beds = select}}>
								  	    <option value={false}>Any Amount</option>
								  	    <option value="1+">1+</option>
								  	    <option value="2+">2+</option>
								  	    <option value="3+">3+</option>
								  	    <option value="4+">4+</option>
								  </select>
							 </div>

							  <div>
								  <h3>Minimum Price</h3>
								  <select name="minprice" ref={(select) => {this.minprice = select}}>
									    <option value="nomin">No Minimum</option>
									    <option value="100000">100 000$</option>
									    <option value="200000">200 000$</option>
									    <option value="300000">300 000$</option>
									    <option value="400000">400 000$</option>
									    <option value="500000">500 000$</option>
									    <option value="600000">600 000$</option>
									    <option value="700000">700 000$</option>
									    <option value="800000">800 000$</option>
									    <option value="900000">900 000$</option>
								  </select>
							 </div>

							  <div>
								  <h3>Maximum Price</h3>
								  <select name="maxprice" ref={(select) => {this.maxprice = select}}>
									    <option value="nomax">No Maximum</option>
									    <option value="100000">100 000$</option>
									    <option value="200000">200 000$</option>
									    <option value="300000">300 000$</option>
									    <option value="400000">400 000$</option>
									    <option value="500000">500 000$</option>
									    <option value="600000">600 000$</option>
									    <option value="700000">700 000$</option>
									    <option value="800000">800 000$</option>
									    <option value="900000">900 000$</option>
								  </select>
							 </div>

							  <div>
								  <h3>Town</h3>
								  <input type="text" name="suburb" placeholder="Anywhere" ref={(input) => {this.suburb = input}}/>
							 </div>

							 <div>
							 	  <Link to="/properties">
							 	  		<input 
							 	  			type="submit" 
							 	  			value="Submit" 
							 	  			onClick={ this.onClick }
							 	  		/>
							 	  </Link>
							 </div>
						</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchOutput: state.search
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSearchData: (myValue) => dispatch(actionCreators.fetchSearchData(myValue))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);