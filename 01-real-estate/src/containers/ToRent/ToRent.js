import React, { Component } from 'react';
import Result from '../../components/Result/Result';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader'
import Sort from '../Sort/Sort';
import * as actionCreators from '../../store/actions/actions';

class ToRent extends Component {
	state = {
		purchasing: false
	}

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <Loader />;
		let status = "";
		let maxAmount = 0;
		let split = 0;

		if ( this.props.samples ) {

					let newArr = [];

					if ( this.props.filtering === 'priceHigh' ) {
						newArr = this.props.samples.sort(function(a, b) {
							return parseFloat(a.price) - parseFloat(b.price);
						}).reverse();
					} else if ( this.props.filtering === 'priceLow' ) {
						newArr = this.props.samples.sort(function(a, b) {
							return parseFloat(a.price) - parseFloat(b.price);
						});
					} else if ( this.props.filtering === 'bedsLow' ) {
						newArr = this.props.samples.sort(function(a, b) {
							return parseFloat(a.beds) - parseFloat(b.beds);
						});
					} else if ( this.props.filtering === 'bedsHigh' ) {
						newArr = this.props.samples.sort(function(a, b) {
							return parseFloat(a.beds) - parseFloat(b.beds);
						}).reverse();
					}

					results = newArr.map(result => {
						if(result.toRent) {
							maxAmount++;
							while (split < 5) { split++; }
							status = "To Rent"
							return <Result 
								key={result.id}
								img={result.img} 
								name={result.name}
								price={result.price} 
								town={result.town}
								beds={result.beds}
								type={result.type}
								id={result.id}
								status={status}
								/>

						} else {
							return null;
						}
					});
				}


		return (
			<div className="ToRent">
				<Sort 
					split={split}
					maxAmount={maxAmount}
				/>
				{ results }
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		samples: state.samples,
		error: state.error,
		filtering: state.filtering
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToRent);