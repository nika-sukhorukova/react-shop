import * as c from '../constants/basket.js';

const initialState = {
    items: [{

    }],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case c.CHANGE_BASKET:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
};
