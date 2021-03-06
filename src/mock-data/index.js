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
		id: 1,
		books: [
			{
				name: ' Классическая Фэнтези',
				category: 'classic-fantasy',
				type: 'catalog',
				image: fantasyCoverPic,
				id: 2,
				books: []
			},
			{
				name: 'Современная Фэнтези',
				category: 'modern-fantasy',
				type: 'catalog',
				image: fantasyCoverPic,
				id: 3,
				books: []
			},
			{
				name: 'Сказки',
				category: 'fairytales',
				type: 'catalog',
				image: fantasyCoverPic,
				id: 4,
				books: []
			},
			{
				id: 2,
				image: imgTudor,
				author: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				id: 5,
				price: 887.55
			},
			{
				id: 3,
				image: imgFray,
				author: 'Макс Фрай',
				name: 'Наваждения',
				id: 6,
				price: 415.42
			}
		]
	},
	{
		name: 'Фантастика',
		category: 'fantastic',
		type: 'catalog',
		image: fantasticCoverPic,
		id: 7,
		books: [
			{
				id: 2,
				image: imgTudor,
				author: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				price: 887.55
			},
			{
				id: 1,
				image: imgFray,
				author: 'Макс Фрай',
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
		id: 8,
		books: [
			{
				id: 9,
				image: imgTudor,
				author: 'С.Дж. Тюдор',
				name: 'Похищение Энни Торн',
				price: 887.55
			}
		]
	},
	{
		id: 10,
		image: imgRadchenko,
		type: 'book',
		author: 'Сергей Радченко',
		name: 'Глазами Волка',
		price: 124.97
	},
	{
		id: 11,
		image: imgFray,
		type: 'book',
		author: 'Макс Фрай',
		name: 'Наваждения',
		price: 415.42
	},
	{
		id: 12,
		image: imgTudor,
		type: 'book',
		author: 'С.Дж. Тюдор',
		name: 'Похищение Энни Торн',
		price: 887.55
	}
];

export default catalogListMain;
