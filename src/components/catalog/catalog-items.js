import imgFray from './img/Макс Фрай Наваждения.jpg';
import imgTudor from './img/С Дж Тюдор Похищение Энни Торн.jpg';
import imgRadchenko from './img/Сергей Радченко Глазами Волка.jpg';
import fantasyCoverPic from './img/catalog-cover-pic/fantasy.jpeg';
import fantasticCoverPic from './img/catalog-cover-pic/fantastic.jpg';
import detectivesCoverPic from './img/catalog-cover-pic/detectives.jpg';

let catalogListMain = [
	{
		name: 'Фэнтези',
		category: 'fantasy',
		type: 'catalog',
		image: fantasyCoverPic,
		books: [
			{
				name: ' Классическая Фэнтези',
				category: 'classic-fantasy',
				type: 'catalog',
				image: fantasyCoverPic,
				books: []
			},
			{
				name: 'Современная Фэнтези',
				category: 'modern-fantasy',
				type: 'catalog',
				image: fantasyCoverPic,
				books: []
			},
			{
				name: 'Сказки',
				category: 'fairytales',
				type: 'catalog',
				image: fantasyCoverPic,
				books: []
			},
			{
				id: 2,
				image: imgTudor,
				autor: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				price: 887.55
			},
			{
				id: 1,
				image: imgFray,
				autor: 'Макс Фрай',
				name: 'Наваждения',
				price: 415.42
			}
		]
	},
	{
		name: 'Фантастика',
		category: 'fantastic',
		type: 'catalog',
		image: fantasticCoverPic,
		books: [
			{
				id: 2,
				image: imgTudor,
				autor: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				price: 887.55
			},
			{
				id: 1,
				image: imgFray,
				autor: 'Макс Фрай',
				name: 'Наваждения',
				price: 415.42
			}
		]
	},
	{
		name: 'Дективы',
		category: 'detectives',
		type: 'catalog',
		image: detectivesCoverPic,
		books: [
			{
				id: 2,
				image: imgTudor,
				autor: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				price: 887.55
			}
		]
	},
	{
		id: 3,
		image: imgRadchenko,
		type: 'book',
		autor: 'Сергей Радченко',
		name: 'Глазами Волка',
		price: 124.97
	},
	{
		id: 1,
		image: imgFray,
		type: 'book',
		autor: 'Макс Фрай',
		name: 'Наваждения',
		price: 415.42
	},
	{
		id: 2,
		image: imgTudor,
		type: 'book',
		autor: 'С.Дж. Тюдор',
		name: 'Похищение Энни Торн',
		price: 887.55
	}
];

export default catalogListMain;
