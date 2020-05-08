import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to = '/'>Каталог</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>Корзина</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order'>Оформление заказа</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;