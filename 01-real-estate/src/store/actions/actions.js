import axios from 'axios';
export const SET_SAMPLES = 'SET_SAMPLES';
export const FETCH_SAMPLES_FAILED = 'FETCH_SAMPLES_FAILED';
export const APPLY_FILTERING = 'APPLY_FILTERING';
export const SEARCH = 'SEARCH';
export const FETCH_SEARCH_DATA = 'FETCH_SEARCH_DATA';
export const ROUTE_CHANGE = 'ROUTE_CHANGE';
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

export const setSamples = (samples) => {
	return {
		type: SET_SAMPLES,
		samples: samples
	};
};

export const fetchSamplesFailed = () => {
	return {
		type: FETCH_SAMPLES_FAILED
	};
};

export const fetchSamples = () => {
	return dispatch => {
		axios.get('https://real-estate-d9a1e.firebaseio.com/examples.json')
			.then(response => {
				dispatch(setSamples(response.data));
			})
			.catch(error => {
				dispatch(fetchSamplesFailed());
			});
	};
};

export const applyFiltering = (myValue) => {
	return {
		type: APPLY_FILTERING,
		payLoad: myValue
	}
}

export const search = (myValue) => {
	return {
		type: SEARCH,
		payLoad: myValue
	};
};

export const fetchSearchData = (myValue) => {
	return dispatch => {
		dispatch(search(myValue));
	};
};

export const routeChange = () => {
	return {
		type: ROUTE_CHANGE
	};
};

export const onPrevPage = () => {
	return {
		type: PREV_PAGE
	}
}
export const onNextPage = () => {
	return {
		type: NEXT_PAGE
	}
}