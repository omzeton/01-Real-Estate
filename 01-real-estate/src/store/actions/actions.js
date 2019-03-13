import axios from 'axios';
export const SET_SAMPLES = 'SET_SAMPLES';
export const FETCH_SAMPLES_FAILED = 'FETCH_SAMPLES_FAILED';
export const APPLY_FILTERING = 'APPLY_FILTERING';

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