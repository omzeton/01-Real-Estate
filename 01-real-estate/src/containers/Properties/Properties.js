import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../Sort/Sort';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Result from '../../components/Result/Result';
import * as actionCreators from '../../store/actions/actions';
import './Properties.css';

class Properties extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <Loader />;
		let status = "";
		let maxAmount = 0;
		let split = 0;
		let noResults = false;

		if ( this.props.samples ) {

		 // If there is ANYTHING in search at global state proceed
		 // Still missing between min and max price
			
			let newArr = [];
			let searched = [];
			let matches = 0;

			let anyArr = [];
			let comparisonArr = ['selected.type === this.props.search.type', 
					'selected.beds === this.props.search.beds',
					'selected.town === this.props.search.town', 
					'selected.price < this.props.search.maxPrice', 
					'selected.price > this.props.search.minPrice' ]
			let typeAny = true;
			let bedsAny = true;
			let minPriceAny = true;
			let maxPriceAny = true;
			let townAny = true;

			if (this.props.search.type !== "false") {
				typeAny = false;
			}
			if (this.props.search.beds !== "false") {
				bedsAny = false;
			}
			if (this.props.search.minPrice !== "nomin") {
				minPriceAny = false;
			}
			if (this.props.search.beds !== "nomax") {
				maxPriceAny = false;
			}
			if (this.props.search.town !== "") {
				townAny = false;
			}

			anyArr.push(typeAny, bedsAny, minPriceAny, maxPriceAny, townAny);


			newArr = this.props.samples.map(selected => {

				searched.push(selected);
				matches++;

				if ( 
					selected.type === this.props.search.type && 
					selected.beds === this.props.search.beds && 
					selected.town === this.props.search.town && 
					selected.price < this.props.search.maxPrice && 
					selected.price > this.props.search.minPrice 
					) {
					// If yes, push it to searched array.
					searched.push(selected);
					matches++;
				}

				// if (bullshit code) {
				// 	if ( typeAny ) {
				// 		if ( 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( typeAny && bedsAny ) {
				// 		if ( 
				// 			selected.town === this.props.search.town && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( typeAny && minPriceAny ) {
				// 		if ( 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( typeAny && maxPriceAny ) {
				// 		if ( 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price < this.props.search.maxPrice
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( typeAny && townAny ) {
				// 		if ( 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( bedsAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( bedsAny && minPriceAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( bedsAny && maxPriceAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.town === this.props.search.town && 
				// 			selected.price < this.props.search.maxPrice
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( bedsAny && townAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type &&
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice 
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( minPriceAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price > this.props.search.minPrice &&
				// 			selected.town === this.props.search.town
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( minPriceAny && townAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price > this.props.search.minPrice
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( minPriceAny && maxPriceAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds &&
				// 			selected.town === this.props.search.town
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( maxPriceAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.town === this.props.search.town
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( maxPriceAny && townAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price < this.props.search.maxPrice &&
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}

				// 	if ( townAny ) {
				// 		if ( 
				// 			selected.type === this.props.search.type && 
				// 			selected.beds === this.props.search.beds && 
				// 			selected.price < this.props.search.maxPrice && 
				// 			selected.price > this.props.search.minPrice
				// 			) {
				// 			// If yes, push it to searched array.
				// 			searched.push(selected);
				// 			matches++;
				// 		}
				// 	}



				// 	// Check if all properties match the criteria from search bar.
				// 	if ( 
				// 		selected.type === this.props.search.type && 
				// 		selected.beds === this.props.search.beds && 
				// 		selected.town === this.props.search.town && 
				// 		selected.price < this.props.search.maxPrice && 
				// 		selected.price > this.props.search.minPrice 
				// 		) {
				// 		// If yes, push it to searched array.
				// 		searched.push(selected);
				// 		matches++;
				// 	}
				// }
			});

			if( matches === 0 ) {
				noResults = true;
			}

			if( noResults === false ) {

				// If there are some results proceed

				// Filtering from selection under search bar
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

				results = searched.map(result => {
					// Set results to results that matched searchbar values
						if(result.forSale) {
							// If it's for sale set status to a readable string and add to the total amount of results
							maxAmount++;
							while (split < 5) { split++; }
							status = "For Sale"
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

						} else if (result.toRent) {
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
						}
				});
			} else if( noResults === true ) {
				// If noResults is equal to true display message.
				results = <div className="noMatches"><h2 className="noMatches__Text">No matches.</h2></div>
			}
		}

		return (
			<div className="Properties">
				<SearchBar/>

				<Sort split={split}
					maxAmount={maxAmount}
					/>
				
				{results}
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		samples: state.samples,
		error: state.error,
		filtering: state.filtering,
		search: state.search
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);