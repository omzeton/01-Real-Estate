import React from 'react';
import './WrongRoute.css';

function wrongRoute(props) {
	return (
		<div className="WrongRoute">
			<div className="WrongRoute__Img">
				<h2>404</h2>
				<h3>Page Not Found</h3>
				<p>We couldn't find the page you were looking for.</p>
			</div>
		</div>
	)
}

export default wrongRoute;