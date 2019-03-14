import * as actionTypes from './actions/actions';

const initialState = {
	samples: null,
	error: false,
	filtering: 'priceHigh',
	search: {
		type: "false",
		beds: "false",
		minPrice: "nomin",
		maxPrice: "nomax",
		town: ""
	},
	pages: 1
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
		case actionTypes.APPLY_FILTERING: {
			return {
				...state,
				filtering: action.payLoad
			};
		}
		case actionTypes.SEARCH: {
			return {
				...state,
				search: {
					type: action.payLoad[0],
					beds: action.payLoad[1],
					minPrice: action.payLoad[2],
					maxPrice: action.payLoad[3],
					town: action.payLoad[4],
				}
			}
		}
		case actionTypes.ROUTE_CHANGE: {
			return {
				...state,
				search: {
					type: "false",
					beds: "false",
					minPrice: "nomin",
					maxPrice: "nomax",
					town: ""
				}
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;