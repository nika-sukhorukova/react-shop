import * as c from '../actions/consatnts';

const initialState = {
	isLoading: true,
	items: [],
	currentCategory: '',
	currentCatalog: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case c.SET_ITEMS:
			return {
				...state,
				isLoading: false,
				items: action.payload
			};
		case c.CHANGE_CATEGORY:
			return {
				...state,
				currentCategory: action.payload,
				currentCatalog: state.items.find((item) => item.category === action.payload)
			};
		default:
			return state;
	}
};
