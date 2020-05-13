import * as c from '../constants/catalog.js';
import catalogListMain from '../mock-data';


export const setState = data => dispatch => {
	dispatch({
		type: c.SET_STATE_CATALOG_PAGE,
		data
	})
}

export const init = () => (dispatch) => {
	let randomTime = parseInt(Math.random() * 1000);
	setTimeout(() => setState({
		isLoading: false,
		breadcrumb: [{
			name: 'Главная',
			books:catalogListMain,
		}],
	})(dispatch), randomTime)
};

export const changeCategory = (target) => (dispatch, getState) => {
	let breadcrumb = [...getState().catalog.breadcrumb, target]

	setState({
		catalog:target.books,
		breadcrumb
	})(dispatch);
};

export const changeBreadcrumb = bc => (dispatch, getState) => {
	let  { breadcrumb } = getState().catalog;
	let index = breadcrumb.findIndex(el => el.name === bc.name);

	setState({
		breadcrumb: breadcrumb.slice(0, index + 1),
		catalog: breadcrumb[index].books
	})(dispatch);
};
