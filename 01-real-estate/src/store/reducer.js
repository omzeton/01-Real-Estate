import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initalState = {
	// this is the global store
	fetching: false,
	fetched: false,
	samples: null,
	limit: 5
}

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case "FETCH_SAMPLES_START": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_SAMPLES_ERROR": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "RECEIVE_SAMPLES": {
			return {...state,
				fetcing:false,
				fetched: true,
				samples: action.payload
			}
		}
	}
	return state;
}

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
	dispatch({type: "FETCH_SAMPLES_START"})
	axios.get('https://real-estate-d9a1e.firebaseio.com/examples.json')
		.then(response => {
			dispatch({type: "RECEIVE_SAMPLES", payload: response.data})
		})
		.catch((err) => {
			dispatch({type: "FETCH_SAMPLES_ERROR", payload: err})
		})
});	

export default reducer;