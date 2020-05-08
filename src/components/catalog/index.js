import React from 'react';
import LoadingIndicator from '../loading-ind';
import CatalogCard from './catalog-card';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/catalog';

import './style.scss';

class Catalog extends React.Component {
	componentDidMount() {
		const { setItems } = this.props.actions;
		setTimeout(() => {
			setItems();
		}, 1000);
	}

	CatalogHandleClick = (id, event) => {
		console.log('Menja jmaknuly', id);
		const { changeCategory } = this.props.actions;
		changeCategory(id);
	};

	render() {
		console.log(this.props);
		const { isLoading, items, currentCategory, currentCatalog } = this.props;
		return (
			<div className="main-content">
				<div>
					<p>{currentCategory}</p>
				</div>
				{isLoading ? (
					<LoadingIndicator />
				) : (
					<CatalogCard
						onClick={this.CatalogHandleClick}
						items={items}
						currentCategory={currentCategory}
						currentCatalog={currentCatalog}
					/>
				)}
			</div>
		);
	}
}

export default connect(
	(state) => state.catalog,
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(Catalog);
