import * as c from './consatnts.js';
import catalogList from '../components/catalog/catalog-items';

export const setItems = () => (dispatch) => {
	dispatch({
		type: c.SET_ITEMS,
		payload: catalogList
	});
};

export const changeCategory = (target) => (dispatch) => {
	dispatch({
		type: c.CHANGE_CATEGORY,
		payload: target
	});
};
