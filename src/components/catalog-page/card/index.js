import React from 'react';

class Card extends React.PureComponent {
	render() {
		const { 
			onClick, 
			card
		} = this.props 
		
		return(
			<div>
				{card.type === 'catalog' ? (
					<div className="catalog-item">
						<img className="cover-image" src={card.image} alt="item.name" />
						<button
							className="button-main"
							onClick={() => onClick(card)}
							key={card.category}
						>
							{card.name}
						</button>
				</div>
				):( 
				<div className="catalog-item">
					<img className="catalog-image" src={card.image} alt="item.name" />
					<p className="name-style">{card.name}</p>
					<p className="author-style ">{card.author}</p>
					<p>Цена {card.price}</p>
					<button className="button-main" onClick={()=> onClick(card)}>В корзину</button>
				</div>
		)}
				
			</div>
		)
	}
};

export default Card;
