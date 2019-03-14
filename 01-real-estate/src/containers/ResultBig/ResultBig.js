import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader'
import * as actionCreators from '../../store/actions/actions';
import './ResultBig.css';

class ResultBig extends Component {

	state = {
		post: null
	}

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let fullResult = this.props.error ? <p>Property can't be loaded!</p> : <Loader />;
		let status = "";
		console.log(this.props);

		if ( this.props.samples ) {
			fullResult = this.props.samples.map(result => {
				if ( result.id == this.props.match.params.id ) {
					if ( result.forSale ) {
						status = "For Sale";
					} else if ( result.toRent ) {
						status = "To Rent ";
					}
						return (
							<div className="Full__Container" key={result.id}>
								<h2>Id. { result.id }</h2>
								<h2>Name: {result.name}</h2>
								<h2>Price: {result.price}</h2>
								<h2>Town: {result.town}</h2>
								<h2>Beds: {result.beds}</h2>
								<h2>Info: {result.info}</h2>
								<h2>Category: {result.type}</h2>
								<h2>Img: {result.img}</h2>
								<h2>Status: {status}</h2>
							</div>
						)
				} else {
					return null;
				}
			});
		}

		return (
			<div className="ResultBig">
				{ fullResult }
			</div>
		);
	}
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultBig));