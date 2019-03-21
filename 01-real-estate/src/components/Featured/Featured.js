import React, { Component } from 'react';
import FeaturedExample from '../FeaturedExample/FeaturedExample';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import * as actionCreators from '../../store/actions/actions';
import './Featured.css';

class Featured extends Component {

	componentDidMount () {
		this.props.onFetchSamples();
	}

	render() {

		let results = this.props.error ? <div className="noMatches"><h2 className="noMatches__Text">Featured properties could not be loaded<br/>due to server miscommunication.</h2></div> : <Loader/>;

		if (this.props.samples) {

			// let data = Object.values(this.props.samples);
			let properties = this.props.samples;

			let data = Object.keys(properties).map(function(key) {
			    return properties[key];
			});

			results = data.slice(0, 3).map(featured => {
				return <Link className="Featured__Link" to={'/properties/' + featured.id} key={featured.id}><FeaturedExample
					img={featured.img}
					price={featured.price}
					info={featured.name}
					city={featured.town}
				/></Link>
			});
		}

		return (
			<div className="Featured">
				{results}
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

export default connect(mapStateToProps, mapDispatchToProps)(Featured);