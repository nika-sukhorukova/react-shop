import * as c from '../constants/basket.js';

export const changeBasket = item => (dispatch, getState) => {
    let { item } = getState().basket;

    dispatch({
        type: c.CHANGE_BASKET,
        items: [{...item, quantity: 1}]
    })
}