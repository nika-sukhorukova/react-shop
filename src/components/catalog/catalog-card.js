import React from 'react';

const CatalogCard = ({ onClick, items, currentCategory, currentCatalog }) => {
	if (currentCategory === '') {
		return (
			<div className="grid-container">
				{items.map((item) => {
					return (
						<div>
							{item.type === 'catalog' ? (
								<div className="catalog-item">
									<img className="cover-image" src={item.image} alt="item.name" />
									<button
										className="button-main"
										onClick={(event) => onClick(item.category, event)}
										key={item.category}
									>
										{item.name}
									</button>
								</div>
							) : (
								<div className="catalog-item">
									<img className="catalog-image" src={item.image} alt="item.name" />
									<p className="name-style">{item.name}</p>
									<p className="autor-style ">{item.autor}</p>
									<p>Цена {item.price}</p>
									<button className="button-main">В корзину</button>
								</div>
							)}
						</div>
					);
				})}
			</div>
		);
	} else if (currentCategory !== '') {
		return (
			<div className="grid-container">
				{currentCatalog.books.map((item) => {
					return (
						<div>
							{item.type === 'catalog' ? (
								<div className="catalog-item">
									<img className="cover-image" src={item.image} alt="item.name" />
									<button
										className="button-main"
										onClick={(event) => onClick(item.category, event)}
										key={item.category}
									>
										{item.name}
									</button>
								</div>
							) : (
								<div className="catalog-item">
									<img className="catalog-image" src={item.image} alt={item.name} />
									<p className="name-style">{item.name}</p>
									<p className="autor-style ">{item.autor}</p>
									<p>Цена {item.price}</p>
									<button className="button-main">В корзину</button>
								</div>
							)}
						</div>
					);
				})}
			</div>
		);
	}
};

export default CatalogCard;
