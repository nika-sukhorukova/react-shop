import React from 'react';
import basketIcon from './img/shoppingcart_ico.svg';

class Basket extends React.Component {
    render() {
        return(
            <div>
                <img src={basketIcon} alt='Корзина'></img>
            </div>
        )
    }
};

export default Basket;