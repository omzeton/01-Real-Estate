import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader'
import * as actionCreators from '../../store/actions/actions';
import './ResultBig.css';

class ResultBig extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	captFirstLetters(string) 
	{
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	render() {

		let fullResult = this.props.error ? <p>Property can't be loaded!</p> : <Loader />;
		let status = "";

		if ( this.props.samples ) {
			let properties = this.props.samples;

			let data = Object.keys(properties).map(function(key) {
			    return properties[key];
			});
			fullResult = data.map(result => {
				// eslint-disable-next-line
				if ( result.id == this.props.match.params.id ) {
					if ( result.forSale ) {
						status = "For Sale";
					} else if ( result.toRent ) {
						status = "To Rent ";
					}
						return (
							<div className="Full__Container" key={result.id}>

									<div className="Full__Column--Left">
										<div className="Full--Info">
											<h2>{result.name}</h2>
											<h2><span>Price:</span> $ {result.price}</h2>
											<h2><span>Town:</span> {result.town}</h2>
											<h2><span>Beds:</span> {result.beds}</h2>
											<h2><span>Category:</span> {this.captFirstLetters(result.type)}</h2>
											<h2><span>Status:</span> {status}</h2>
											<p>{result.info}</p>
										</div>
									</div>
									<div className="Full__Column--Right">
										<div className="Full--Img"  style={{backgroundImage: 'url(' + result.img + ')'}}></div>
									</div>

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