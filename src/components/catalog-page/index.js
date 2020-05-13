import React from 'react';
import LoadingIndicator from '../auxiliary components/loading';
import Card from './card';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/catalog';
import { changeBasket } from '../../actions/basket';
import Breadcrumbs from './breadcrumbs';

import './style.scss';

class Catalog extends React.Component {
	componentDidMount() {
		this.props.actions.init()
	}

	handleClick = item => {
		const { changeCategory, changeBasket } = this.props.actions;
		if (item.type === 'catalog') {
			changeCategory(item);
		} else if(item.type === 'book'){
			debugger
			changeBasket(item)
		}
	};

	handleChangeBreadcrumb = breadcrumb => {
		 this.props.actions.changeBreadcrumb(breadcrumb);
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
			init: () => dispatch(actions.init())
	})
)(Catalog);
