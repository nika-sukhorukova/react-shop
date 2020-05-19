import * as c from '../constants/basket.js';

const initialState = {
	items: [],
	totalPrice: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case c.CHANGE_BASKET:
			return {
				...state,
				items: [...state.items,
						action.items,
						],
				totalPrice: Math.ceil((action.totalPrice)*100)/100
			};
		default:
			return state;
	}
};
