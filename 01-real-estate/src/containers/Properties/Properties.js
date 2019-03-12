import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../../components/Sort/Sort';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Result from '../../components/Result/Result';
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

				<Sort split={split} maxAmount={maxAmount}/>
				
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