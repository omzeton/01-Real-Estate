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
								<div className="Full__Container__Row--Up">
									<div className="Full__Column--Left">
										<div className="Full--Info">
											<h2>{result.name}</h2>
											<h2><span>Id.</span> { result.id }</h2>
											<h2><span>Price:</span> {result.price}</h2>
											<h2><span>Town:</span> {result.town}</h2>
											<h2><span>Beds:</span> {result.beds}</h2>
											<h2><span>Category:</span> {result.type}</h2>
											<h2><span>Status:</span> {status}</h2>
										</div>
									</div>
									<div className="Full__Column--Right">
										<div className="Full--Img"  style={{backgroundImage: 'url(' + result.img + ')'}}></div>
									</div>
								</div>

								<div className="Full__Container__Row--Down">
									<p><span>Details:</span> {result.info}</p>
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