import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../Sort/Sort';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../containers/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Result from '../../components/Result/Result';
import * as actionCreators from '../../store/actions/actions';
import './Properties.css';

class Properties extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <Loader />,
			status = "",
			maxAmount = 0,
			split = 0,
			noResults = false;

		if ( this.props.samples ) {
			
			let searched = [],
				matches = 0,
				typeAny = true,
				bedsAny = true,
				minPriceAny = true,
				maxPriceAny = true,
				townAny = true;

			// Jeżeli jest coś tam zamiast 'false'. Czyli jak są tam jakieś słowa.
			if (this.props.search.type !== "false") {
				// Then it's NOT anything
				typeAny = false;
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

			this.props.samples.map(selected => {

				let typePass = false;
				let bedsPass = false;
				let minPricePass = false;
				let maxPricePass = false;
				let townPass = false;

				if ( !typeAny ) {
					if ( selected.type === this.props.search.type ) {
						typePass = true;
					}
				} else {
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

				if (typePass && bedsPass && minPricePass && maxPricePass && townPass) {
					searched.push(selected);
					matches++;
				}

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
									maxAmount++;
									while (split < 5) { split++; }
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