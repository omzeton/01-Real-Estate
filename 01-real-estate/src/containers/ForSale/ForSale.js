import React, { Component } from 'react';
import Result from '../../components/Result/Result';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sort from '../Sort/Sort';
import * as actionCreators from '../../store/actions/actions';

class ForSale extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}


	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <Loader />,
			status = "For Sale",
			maxAmount = 0,
			currentPage = this.props.currentPage,
			x = 0,
			y = 0,
			numberFrom = 0,
			numberTo = 0;


		if ( this.props.samples ) {

			let arr = [];
			
			this.props.samples.map(result => {
				if(result.forSale) {
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
			<div className="ForSale">
				<Sort 
					numberFrom={numberFrom}
					numberTo={numberTo}
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
		filtering: state.filtering,
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForSale);