import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionProviders from '../../store/actions/actions';
import './Sort.css';

class Sort extends Component {

	render() {

		let buttons = null,
			forward = false,
			backward = false,
			index = this.props.currentPage,
			maxAmount = this.props.maxAmount;

		if (maxAmount > 5) {
			// eslint-disable-next-line
			if ( index == 0 ) {
				forward = true;
				backward = false;
			} else if ( index === (Math.floor(maxAmount / 5))) {
				forward = false;
				backward = true;
			} else {
				forward = true;
				backward = true;
			}
		} else {
			forward = false;
			backward = false;
		}

		if ( this.props.samples ) {
			if ( forward && backward ) {
				buttons = <h2>All Properties ({this.props.numberFrom} - {this.props.numberTo} of {this.props.maxAmount} Properties: <span onClick={this.props.onPrevPage}>previous</span> | <span onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( !backward && forward ) {
				buttons = <h2>All Properties ({this.props.numberFrom} - {this.props.numberTo} of {this.props.maxAmount} Properties: <span className="disabled" onClick={this.props.onPrevPage}>previous</span> | <span onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( backward && !forward ) {
				buttons = <h2>All Properties ({this.props.numberFrom} - {this.props.numberTo} of {this.props.maxAmount} Properties: <span onClick={this.props.onPrevPage}>previous</span> | <span className="disabled" onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( !backward && !forward ) {
				buttons = <h2>All Properties ({this.props.numberFrom} - {this.props.numberTo} of {this.props.maxAmount} Properties: <span className="disabled">previous</span> | <span className="disabled">next</span>)</h2>
			}
		}

		return(
			<div className="Sort">
				<div className="Sort__Container">
					<div className="Sort__Container--Header">
						{ buttons }
					</div>
					<div></div>
					<div className="Sort__Container--Filter">
						<h2>Sort by:</h2>
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
		samples: state.samples,
		filtering: state.filtering,
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onApplyFiltering: (myValue) => dispatch(actionProviders.applyFiltering(myValue)),
		onPrevPage: () => dispatch(actionProviders.onPrevPage()),
		onNextPage: () => dispatch(actionProviders.onNextPage())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sort));