import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../../Sort/Sort';
import Loader from '../../../components/Loader/Loader';
import SearchBar from '../../SearchBar/SearchBar';
import { Link, withRouter } from 'react-router-dom';
import Result from '../../../components/Result/Result';
import * as actionCreators from '../../../store/actions/actions';
import './Properties.css';

class Properties extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <div className="noMatches"><h2 className="noMatches__Text">Properties can't be loaded<br/>due to server miscommunication.</h2></div> : <Loader />,
			status = "",
			maxAmount = 0,
			noResults = false,
			currentPage = this.props.currentPage,
			x = 0,
			y = 0,
			numberFrom = 0,
			numberTo = 0,
			location = 'properties';

		if ( this.props.samples ) {

			let properties = this.props.samples;

			let data = Object.keys(properties).map(function(key) {
			    return properties[key];
			});
			
			let searched = [],
				matches = 0,
				typeAny = true,
				bedsAny = true,
				minPriceAny = true,
				maxPriceAny = true,
				townAny = true;

			// Check if type attribute holds any data
			if (this.props.search.type !== "false") {
				typeAny = false; // If not it's set on 'anything' 
			}
			if (this.props.search.beds !== "false") {
				bedsAny = false;
			}
			if (this.props.search.minPrice !== "nomin") {
				minPriceAny = false;
			}
			if (this.props.search.maxPrice !== "nomax") {
				maxPriceAny = false;
			}
			if (this.props.search.town !== "") {
				townAny = false;
			}

			// Map samples from Firebase
			data.map(selected => {

				// Check if the samples meet the criteria set in form of the search bar
				let typePass = false;
				let bedsPass = false;
				let minPricePass = false;
				let maxPricePass = false;
				let townPass = false;

				// If it's not anything check for the type
				if ( !typeAny ) {
					if ( selected.type === this.props.search.type ) {
						// See if the value from search bar is the same as the sample's value
						typePass = true;
					}
				} else { // If it is it doesn't matter. It fits.
					typePass = true;
				}

				if ( !bedsAny ) {
					if ( selected.beds === this.props.search.beds ) {
						bedsPass = true;
					}
				} else {
					bedsPass = true;
				}

				if ( !minPriceAny ) {
					if ( selected.price > this.props.search.minPrice ) {
						minPricePass = true;
					}
				} else {
					minPricePass = true;
				}

				if ( !maxPriceAny ) {
					if ( selected.price < this.props.search.maxPrice ) {
						maxPricePass = true;
					}
				} else {
					maxPricePass = true;
				}

				if ( !townAny ) {
					if ( selected.town === this.props.search.town ) {
						townPass = true;
					}
				} else {
					townPass = true;
				}

				// If a sample passes all tests it's the right result.
				if (typePass && bedsPass && minPricePass && maxPricePass && townPass) {
					searched.push(selected);
					matches++; // This is how many matches there will be in total
				}

				return searched;

				});

					if( matches === 0 ) { // If there were no matches display noResults message
						noResults = true;
						results = <div className="noMatches"><h2 className="noMatches__Text">No matches.</h2></div>
					}

					if( !noResults ) {

						// If there are some results proceed

						// Sort the right results according to form under the search bar
						if ( this.props.filtering === 'priceHigh' ) {
							searched.sort(function(a, b) {
								return parseFloat(a.price) - parseFloat(b.price);
							}).reverse();
						} else if ( this.props.filtering === 'priceLow' ) {
							searched.sort(function(a, b) {
								return parseFloat(a.price) - parseFloat(b.price);
							});
						} else if ( this.props.filtering === 'bedsLow' ) {
							searched.sort(function(a, b) {
								return parseFloat(a.beds) - parseFloat(b.beds);
							});
						} else if ( this.props.filtering === 'bedsHigh' ) {
							searched.sort(function(a, b) {
								return parseFloat(a.beds) - parseFloat(b.beds);
							}).reverse();
						}

						let sliced = [];
						maxAmount = matches;

						// If there are more than 5 matches
						if (maxAmount > 5) {
							x = currentPage*5;
							y = x + 5;
							sliced = searched.slice(x, y);
							numberFrom = x + 1;
							if ( y > maxAmount ) {
								numberTo = maxAmount;
							} else {
								numberTo = y;
							}
						} else {
							sliced = searched;
						}

						// Set the right results equal to elements
						// And pass the data as props
						results = sliced.map(result => {
								if(result.forSale) {
									// If it's for sale set status to a more readable string
									status = "For Sale"
									return <Link to={'/properties/' + result.id} key={result.id}><Result 
										key={result.id}
										img={result.img} 
										name={result.name}
										price={result.price} 
										town={result.town}
										beds={result.beds}
										type={result.type}
										id={result.id}
										status={status}
										/></Link>

								} else if (result.toRent) {
									status = "To Rent"
									return <Link to={'/properties/' + result.id} key={result.id}><Result 
										key={result.id}
										img={result.img} 
										name={result.name}
										price={result.price} 
										town={result.town}
										beds={result.beds}
										type={result.type}
										id={result.id}
										status={status}
										/></Link>
								}
								return results;
							});
						}
		}

		return (
			<div className="Properties">
				<SearchBar location={location}/>

				<Sort 
					numberFrom={numberFrom}
					numberTo={numberTo}
					maxAmount={maxAmount}
				/>
				
				{results}

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
		search: state.search,
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Properties));