import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.scss';

import store from './store.js';

import App from './App';

ReactDOM.render(
	<Provider store={store()}>
		<App />
	</Provider>,
	document.getElementById('root')
);
