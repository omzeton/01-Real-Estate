import * as actionTypes from './actions/actions';

const initialState = {
	number: 0,
	results: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
			case actionTypes.INCREMENT: {
				return {...state, number: state.number + action.val}
			}
			case actionTypes.SUBTRACT: {
				return {...state, number: state.number - 1}
			}
			case actionTypes.STORE_RESULT: {
				return {...state, results: state.results.concat({id: Math.random(), value: state.number})}
			}
			case actionTypes.DELETE_RESULT: {
				// const i = 2;
				// const newArray = [...state.results]
				// newArray.splice(id, 1);
				const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);
				return {
					...state,
					results: updatedArray
				}
			}
		default: {
			return state;
		}
	}
}

export default reducer;