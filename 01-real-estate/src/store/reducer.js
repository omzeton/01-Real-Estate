import * as actionTypes from './actions/actions';

const initialState = {
	samples: null,
	error: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_SAMPLES: 
			return {
				...state,
				samples: action.samples,
				error: false
			};
		case actionTypes.FETCH_SAMPLES_FAILED: {
			return {
				...state,
				error: true
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;