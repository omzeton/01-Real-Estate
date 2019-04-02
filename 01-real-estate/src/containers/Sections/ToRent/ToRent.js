import React, { Component } from 'react';
import Result from '../../../components/Result/Result';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import Sort from '../../Sort/Sort';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/actions';

import './ToRent.css';

class ToRent extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <div className="noMatches"><h2 className="noMatches__Text">Properties can't be loaded<br/>due to server miscommunication.</h2></div> : <Loader />,
					status = "To Rent!",
					maxAmount = 0,
					currentPage = this.props.currentPage,
					x = 0,
					y = 0,
					numberFrom = 0,
					numberTo = 0;


				if ( this.props.samples ) {

					let arr = [];
					let properties = this.props.samples;

					let data = Object.keys(properties).map(function(key) {
					    return properties[key];
					});
					
					data.map(result => {
						if(result.toRent) {
							maxAmount++;
							arr.push(result);
						}
						return arr;
					});

					// Sort every result according to form under the search bar
					if ( this.props.filtering === 'priceHigh' ) {
						arr.sort(function(a, b) {
							return parseFloat(a.price) - parseFloat(b.price);
						}).reverse();
					} else if ( this.props.filtering === 'priceLow' ) {
						arr.sort(function(a, b) {
							return parseFloat(a.price) - parseFloat(b.price);
						});
					} else if ( this.props.filtering === 'bedsLow' ) {
						arr.sort(function(a, b) {
							return parseFloat(a.beds) - parseFloat(b.beds);
						});
					} else if ( this.props.filtering === 'bedsHigh' ) {
						arr.sort(function(a, b) {
							return parseFloat(a.beds) - parseFloat(b.beds);
						}).reverse();
					}

					let sliced = [];

					// If there are more than 5 matches
					if (maxAmount > 5) {
						x = currentPage*5;
						y = x + 5;
						sliced = arr.slice(x, y);
						numberFrom = x + 1;
						if ( y > maxAmount ) {
							numberTo = maxAmount;
						} else {
							numberTo = y;
						}
					} else {
						sliced = arr;
					}

					results = sliced.map(result => {
							return (<Link to={'/for-sale/' + result.id} key={result.id}><Result 
								img={result.img} 
								name={result.name}
								price={result.price} 
								town={result.town}
								beds={result.beds}
								type={result.type}
								id={result.id}
								status={status}
								/></Link>)
					});
				}


		return (
			<div className="ToRent">
				<div className="Header__Title">
					<div className="Header__Img">
						<h2>To Rent</h2>
					</div>
				</div>
				<Sort 
					numberFrom={numberFrom}
					numberTo={numberTo}
					maxAmount={maxAmount}
				/>
				{ results }
				<Sort 
					numberFrom={numberFrom}
					numberTo={numberTo}
					maxAmount={maxAmount}
				/>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		samples: state.samples,
		error: state.error,
		filtering: state.filtering,
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToRent);