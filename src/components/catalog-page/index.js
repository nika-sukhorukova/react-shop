import React from 'react';
import LoadingIndicator from '../auxiliary components/loading';
import Card from './card';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/catalog';
import * as basketActions from '../../actions/basket';
import Breadcrumbs from './breadcrumbs';

import './style.scss';

class Catalog extends React.Component {
	componentDidMount() {
		this.props.actions.catalog.init()
	}

	handleClick = item => {
		const { changeCategory } = this.props.actions.catalog;
		const { changeBasket } = this.props.actions.basket;
		if (item.type === 'catalog') {
			changeCategory(item);
		} else {
			changeBasket(item)
		}
	};

	handleChangeBreadcrumb = breadcrumb => {
		const { changeBreadcrumb } = this.props.actions.catalog;
		changeBreadcrumb(breadcrumb);
	}

	render() {
		const { 
			isLoading, 
			breadcrumb,
		} = this.props.catalog;
		const books = breadcrumb[breadcrumb.length - 1].books;
		return (
			<div className="main-content">
				<div>
					<Breadcrumbs breadcrumbs={breadcrumb} onClick={this.handleChangeBreadcrumb}/>
				</div>
				{isLoading ? (
					<LoadingIndicator />
				) : (
				<div className='grid-container'>
					{books.map(card =>
					<Card
						onClick={this.handleClick}
						card={card}
						key={card.id}
					/>
				)}
				</div>)}
			</div>
		);
	}
}

export default connect(
	(state) => state,
		(dispatch) => ({
		actions: {
			catalog: bindActionCreators(actions, dispatch),
			basket: bindActionCreators(basketActions, dispatch)
		}
	})
)(Catalog);


