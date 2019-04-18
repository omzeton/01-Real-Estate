import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import Home from '../../components/Home/Home';
import Properties from '../Sections/Properties/Properties';
import about from '../../components/About/About';
import ListYourProperty from '../Sections/ListYourProperty/ListYourProperty';
import ForSale from '../Sections/ForSale/ForSale';
import FullResult from '../FullResult/FullResult';
import ToRent from '../Sections/ToRent/ToRent';
import Footer from '../../components/Footer/Footer';
import WrongRoute from '../../components/WrongRoute/WrongRoute';

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
						<Route path="/about-us" exact component={about}/>
						<Route path="/list-your-property" exact component={ListYourProperty}/>

						<Route path="/properties/:id" component={FullResult}/>
						<Route path="/for-sale/:id" component={FullResult}/>
						<Route path="/to-rent/:id" component={FullResult}/>

						<Route path="/" exact component={Home}/>
						<Route component={WrongRoute}/>
					</Switch>
				<Footer />
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