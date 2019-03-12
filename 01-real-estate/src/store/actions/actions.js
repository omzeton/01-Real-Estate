export const INCREMENT = 'INCREMENT';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
	return {
		type: INCREMENT,
		val: 15
	};
};

export const subtract = () => {
	return {
		type: SUBTRACT
	};
};

export const storeResult = () => {
	return {
		type: STORE_RESULT
	};
};

export const deleteResult = (id) => {
	return {
		type: DELETE_RESULT,
		resultElId: id
	};
};