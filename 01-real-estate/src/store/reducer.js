const initalState = {
	// this is the global store
	limit: 5
}

const reducer = (state = initalState, action) => {
	if(action.type === 'INCREMENT') {
		return {
			limit: state.counter + 1
		}
	}
	return state;
}

export default reducer;