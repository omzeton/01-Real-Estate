import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionProviders from '../../store/actions/actions';
import './Sort.css';

class Sort extends Component {

	state = {
		forward: false,
		backward: false
	}

	componentDidMount () {
			let index = this.props.currentPage,
				maxAmount = this.props.maxAmount;
			if (maxAmount > 5) {
				if ( index == 0 ) {
					this.setState({forward:true, backward:false});
				} else if ( index === (Math.floor(maxAmount / 5))) {
					this.setState({forward:false, backward:true});
				} else {
					this.setState({forward:true, backward:true});
				}
			} else {
				this.setState({forward:false, backward:false});
			}
			console.log(maxAmount);
	}

	render() {

		let buttons = null,
			forward = this.state.forward,
			backward = this.state.backward;

		if ( this.props.samples ) {
			if ( forward && backward ) {
				buttons = <h2>All Properties (1 - {this.props.split} of {this.props.maxAmount} Properties: <span onClick={this.props.onPrevPage}>previous</span> | <span onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( !backward && forward ) {
				buttons = <h2>All Properties (1 - {this.props.split} of {this.props.maxAmount} Properties: <span className="disabled" onClick={this.props.onPrevPage}>previous</span> | <span onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( backward && !forward ) {
				buttons = <h2>All Properties (1 - {this.props.split} of {this.props.maxAmount} Properties: <span onClick={this.props.onPrevPage}>previous</span> | <span className="disabled" onClick={this.props.onNextPage}>next</span>)</h2>
			} else if ( !backward && !forward ) {
				buttons = <h2>All Properties (1 - {this.props.split} of {this.props.maxAmount} Properties: <span className="disabled">previous</span> | <span className="disabled">next</span>)</h2>
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
		samples: state.samples,
		filtering: state.filtering,
		index: state.pages,
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