import React, { Component } from 'react';
import Result from '../../components/Result/Result';
import { connect } from 'react-redux';
import Sort from '../../components/Sort/Sort';
import * as actionCreators from '../../store/actions/actions';

class ForSale extends Component {
	state = {
		purchasing: false
	}

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <p>Properties can't be loaded</p> : <p>Loading...</p>;
		let status = "";

		if ( this.props.samples ) {
			results = this.props.samples.map(result => {
				if(result.forSale) {

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

				} else {
					return null;
				}
			});
		}


		return (
			<div className="ForSale">
				<Sort />
				{ results }
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		samples: state.samples,
		error: state.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchSamples: () => dispatch(actionCreators.fetchSamples())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForSale);