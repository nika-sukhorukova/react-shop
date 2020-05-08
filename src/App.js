import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Cart from './components/cart';
import OrderForm from './components/order-form';

function App() {
	return (
		<div className="center">
			<div className="content">
				<Router>
					<Header />
					<Route exact path="/" component={Catalog} />
					<Route path="/cart" component={Cart} />
					<Route path="/order" component={OrderForm} />
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;
