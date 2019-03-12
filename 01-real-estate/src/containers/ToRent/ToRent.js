import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from '../../components/Sort/Sort';
import * as actionCreators from '../../store/actions/actions';

class ToRent extends Component {

	render() {
		return (
			<div className="ToRent">
				<Sort />
				<h2>To Rent {this.props.number}</h2>
				<ul>
					<li onClick={this.props.onIncrementNumber}>+</li>
					<li onClick={this.props.onSubtractNumber}>-</li>
				</ul>
				<hr />
				<button onClick={this.props.onStoreResult}>Store Result</button>
				<ul>
					<li>stored results (not deletable)</li>
					{
						this.props.storedResults.map(strResult => (
						<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
						))
					}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		number: state.number,
		storedResults: state.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementNumber: () => dispatch(actionCreators.increment()),
		onSubtractNumber: () => dispatch(actionCreators.subtract()),
		onStoreResult: () => dispatch(actionCreators.storeResult()),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToRent);