import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionProviders from '../../store/actions/actions';
import './Sort.css';

class Sort extends Component {
	render() {
		return(
			<div className="Sort">
				<div className="Sort__Container">
					<div className="Sort__Container--Header">
						<h2>All Properties (1 - {this.props.split} of {this.props.maxAmount} Properties: <Link to="/">previous</Link> | <Link to="/">next</Link>)</h2>
					</div>
					<div></div>
					<div className="Sort__Container--Filter">
						<h2>Sort by: </h2>
						  <select name="filter" onChange={ (e) => this.props.onApplyFiltering(e.target.value) }>
							    <option value="priceHigh">Price: highest to lowest</option>
							    <option value="priceLow">Price: lowest to highest</option>
							    <option value="bedsLow">Beds: least to most</option>
							    <option value="bedsHigh">Beds: most to last</option>
						  </select>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filtering: state.filtering
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onApplyFiltering: (myValue) => dispatch(actionProviders.applyFiltering(myValue))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);