import * as c from '../constants/basket.js';

export const changeBasket = item => (dispatch,getState) => {
    let { totalPrice } = getState().basket;
    let { price } = item;
    totalPrice += price 
    dispatch({
        type: c.CHANGE_BASKET,
        items: {...item, quantity: 1},
        totalPrice
    })
}