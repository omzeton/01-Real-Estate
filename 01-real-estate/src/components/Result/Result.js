import React from 'react';
import './Result.css';

function Result(props) {
	return (
		<div className="Result">
			<div className="Result__Img" style={{backgroundImage: 'url(' + props.img + ')'}}></div>
			<div className="Result__Info">
				<h2>{props.name}</h2>
				<h3>$ {props.price}</h3>
				<p><span>Town:</span> {props.town}</p>
				<p><span>Beds:</span> {props.beds}</p>
				<p><span>Category:</span> {props.type}</p>
			</div>
			<div className="Result__Id">
				<div><h2>ref# <span>{props.id}</span></h2></div>
				<div></div>
				<div><h3>{props.status}!</h3></div>
			</div>
		</div>
	);
}

export default Result;