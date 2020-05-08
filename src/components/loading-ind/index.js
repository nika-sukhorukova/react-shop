import React from 'react';
import './style.scss';

const LoadingIndicator = () => {
	return (
		<div className="spinner">
			<span className="spinner-inner-1" />
			<span className="spinner-inner-2" />
			<span className="spinner-inner-3" />
		</div>
	);
};

export default LoadingIndicator;
