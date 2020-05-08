import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './navigation';
import './style.scss';

const Header = () => {
	return (
		<div>
			<header className="header">
				<div>
					<NavLink exact to="/">
						<h1>Book-shop</h1>
					</NavLink>
				</div>
				<NavBar />
			</header>
		</div>
	);
};

export default Header;
