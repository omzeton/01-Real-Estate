import React, { Component } from 'react';
import Sort from '../../components/Sort/Sort';
import axios from 'axios';
import Result from '../../components/Result/Result';
import './ForSale.css';

class ForSale extends Component {
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

		if (this.state.samples) {
			results = this.state.samples.map(result => {
				if (result.forSale) {
					return <Result 
						key={result.id}
						img={result.img} 
						name={result.name}
						price={result.price} 
						town={result.town}
						beds={result.beds}
						type={result.type}
						id={result.id}
						status={"For Sale"}
						/>
				} else {
					return null
				}
			});

			maxAmount = this.state.samples.includes({"forSale": true}).length;
			if(maxAmount >= this.props.ctr) {
				split = this.props.ctr;
			} else {
				split = maxAmount;
			}
		}

		return (
			<div className="ForSale">
				<Sort split={split} maxAmount={maxAmount}/>
				{ results }
			</div>
		);
	}
};

export default ForSale;