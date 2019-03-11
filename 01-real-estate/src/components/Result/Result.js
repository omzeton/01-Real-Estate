import React from 'react';
import './Result.css';

function Result(props) {
	return(
		<div className="Result">
			<h2>Result</h2>
			{props.price}
			{props.name}
			{props.info}
			{props.size}
			{props.ref}
		</div>
	);
}

export default Result;