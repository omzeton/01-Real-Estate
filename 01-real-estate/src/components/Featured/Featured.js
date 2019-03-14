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

		let results = this.props.error ? <p>Featured properties could not be loaded</p> : <Loader/>;

		if (this.props.samples) {
			results = this.props.samples.slice(0, 3).map(featured => {
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