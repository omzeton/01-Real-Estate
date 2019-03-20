import React, { Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu';
import Home from '../Home/Home';
import Properties from '../Properties/Properties';
import About from '../../components/About/About';
import ListYourProperty from '../ListYourProperty/ListYourProperty';
import ForSale from '../ForSale/ForSale';
import ResultBig from '../ResultBig/ResultBig';
import ToRent from '../ToRent/ToRent';
import Footer from '../../components/Footer/Footer';
import WrongRoute from '../../components/WrongRoute/WrongRoute';
import Objectives from '../../components/Objectives/Objectives';

import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class RealEstate extends Component {

	componentWillReceiveProps(nextProps) {
		// Reset state after each route change
		// Except when going from "/" to "/properties" to display the search result
		// eslint-disable-next-line
		if ( this.props.location.pathname == "/" ) {
			return null;
		} else if (nextProps.location.pathname !== this.props.location.pathname) {
	      this.props.onRouteChange();
	    }
	  }
	componentDidMount() {

	}

	render() {
		return (
			<div className="RealEstate">
				<TopMenu />
					<Switch>
						<Route path="/properties" exact component={Properties}/>
						<Route path="/for-sale" exact component={ForSale}/>
						<Route path="/to-rent" exact component={ToRent}/>
						<Route path="/about-us" exact component={About}/>
						<Route path="/list-your-property" exact component={ListYourProperty}/>

						<Route path="/properties/:id" component={ResultBig}/>
						<Route path="/for-sale/:id" component={ResultBig}/>
						<Route path="/to-rent/:id" component={ResultBig}/>

						<Route path="/" exact component={Home}/>
						<Route component={WrongRoute}/>
					</Switch>
				<Footer />
				<Objectives />
			</div>
		);
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onRouteChange: () => dispatch(actionCreators.routeChange())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(RealEstate));