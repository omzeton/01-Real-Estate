import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Result from '../../components/Result/Result';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Properties.css';

class Properties extends Component {
	state = {
		samples : null,
	}

	componentDidMount () {
		axios.get('https://real-estate-d9a1e.firebaseio.com/examples.json')
			.then(response => {
				this.setState({samples: response.data});
			});
	}

	render() {

		let results = null;
		let maxAmount = null;
		let split = null;
		let status = null;

		if (this.state.samples) {
			results = this.state.samples.slice(0, this.props.ctr).map(result => {
				if (result.forSale) {
					status = "For Sale";
				} else {
					status = "To Rent";
				}

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
			});

			maxAmount = this.state.samples.length;
			if(maxAmount >= this.props.ctr) {
				split = this.props.ctr;
			} else {
				split = maxAmount;
			}
		}

		return (
			<div className="Properties">
				<SearchBar/>

				<div className="Sort">
					<div className="Sort__Container">
						<div className="Sort__Container--Header">
							<h2>All Properties (1 - {split} of {maxAmount} Properties: <Link to="/">previous</Link> | <Link to="/">next</Link>)</h2>
						</div>
						<div></div>
						<div className="Sort__Container--Filter">
							<h2>Sort by: </h2>
							  <select name="filter">
								    <option value="priceLow">Price: lowest to highest</option>
								    <option value="priceHigh">Price: highest to lowest</option>
								    <option value="bedsLow">Beds: least to most</option>
								    <option value="bedsHigh">Beds: most to last</option>
							  </select>
						</div>
					</div>
				</div>
				{results}
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		ctr: state.limit
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementLimit: () => dispatch({type: 'INCREMENT'})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);