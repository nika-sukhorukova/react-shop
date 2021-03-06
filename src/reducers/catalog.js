import * as c from '../constants/catalog';

const initialState = {
	isLoading: true,
	breadcrumb:[{}],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case c.SET_STATE_CATALOG_PAGE:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
};
