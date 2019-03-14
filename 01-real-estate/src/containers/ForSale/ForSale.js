import React, { Component } from 'react';
import Result from '../../components/Result/Result';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sort from '../Sort/Sort';
import * as actionCreators from '../../store/actions/actions';

class ForSale extends Component {

	state = {
		disableForward: false,
		disableBackward: false,
		maxAmount: 0,
		currentPage: 0
	}


	disableForwardFunction = () => {
		this.setState({disableForward: true});
	}
	enableForwardFunction = () => {
		this.setState({disableForward: false});
	}

	disableBackwardFunction = () => {
		this.setState({disableBackward: true});
	}
	enableBackwardFunction = () => {
		this.setState({disableBackward: false});
	}
	onIncrement = () => {
		this.setState({currentPage: this.state.currentPage + 5});;
	}

	componentDidMount () {
		this.props.onFetchSamples();
		// disable buttons to prevent going under 0
		if ( this.state.currentPage == 0 ) {
			this.disableBackwardFunction();
		} else if ( this.state.currentPage > 0 ) {
			this.enableBackwardFunction();
		}

		// disable buttons to prevent going above results amount
		if ( (this.state.currentPage * 5) > 8 ) {
			this.disableForwardFunction();
		} else if ( this.state.currentPage > 0 ) {
			this.disableBackwardFunction();
		}
	}

	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <Loader />,
			status = "For Sale",
			maxAmount = 0,
			pages = 1,
			currentPage = 1,
			noResults = false;


		if ( this.props.samples ) {

			let arr = [];
			let newArr = [];
			
			arr = this.props.samples.map(result => {
				if(result.forSale) {
					newArr.push(result);
					maxAmount++;
				}
			});

			// Sort every result according to form under the search bar
			if ( this.props.filtering === 'priceHigh' ) {
				newArr.sort(function(a, b) {
					return parseFloat(a.price) - parseFloat(b.price);
				}).reverse();
			} else if ( this.props.filtering === 'priceLow' ) {
				newArr.sort(function(a, b) {
					return parseFloat(a.price) - parseFloat(b.price);
				});
			} else if ( this.props.filtering === 'bedsLow' ) {
				newArr.sort(function(a, b) {
					return parseFloat(a.beds) - parseFloat(b.beds);
				});
			} else if ( this.props.filtering === 'bedsHigh' ) {
				newArr.sort(function(a, b) {
					return parseFloat(a.beds) - parseFloat(b.beds);
				}).reverse();
			}
			// Now that it's sorted we can finally start cutting

			pages = Math.floor(maxAmount / 5);
			let sliced = [];

			// If there are more than 5 matches
			if (maxAmount > 5) {

				// currentPage dictates from which part to cut an array
				for (let i = this.state.currentPage; i <= maxAmount; i *= 5) {
					sliced = newArr.slice(i*5, i += 5);
				}
			}

			console.log(sliced);

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
					split={(this.state.currentPage + 5)}
					maxAmount={maxAmount}
					currentPage={this.state.currentPage}
					disableBackward={this.state.disableBackward}
					disableForward={this.state.disableForward}
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