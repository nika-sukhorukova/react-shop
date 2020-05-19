import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/catalog';
import { bindActionCreators } from 'redux';

import './style.scss';

import Basket from './basket';

class Header extends React.PureComponent{
	handelClickLogo = () => {
		this.props.actions.init();
		window.location.href = '/';
	}
	render() {
		const { items, totalPrice } = this.props.basket;
		return (
			<div>
				<header className="header">
					<div>
						<h1 onClick={this.handelClickLogo}>Book-shop</h1>
					</div>
					<div>
						<Basket/>
						{totalPrice > 0 ? (
							<span>{totalPrice}</span>
						): null}
					</div>
				</header>
			</div>
		);
	}
};

export default connect(
	(state) => state,
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch),
})
)(Header);