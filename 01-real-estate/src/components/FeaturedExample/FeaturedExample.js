import React from 'react';
import './FeaturedExample.css';

function featuredExample(props) {

	const divStyle = {
		backgroundImage: 'url(' + props.img + ')'
	};

	return (
		<div className="FeaturedExample">
			<div className="Featured__Example--Img" style={divStyle}></div>
			<div className="Featured__Example__Info">
				<div className="Info--Top">
					<div className="Header">
						<div><h2>$ {props.price}</h2></div>
						<div></div>
						<div><p>Featured!</p></div>
					</div>
					<div className="Info">
						<p>{props.info}</p>
					</div>
				</div>
				<div className="Info--Bottom">
					<div className="City">
						<h4>City: {props.city}</h4>
					</div>
					<div></div>
					<div className="Link">
						<h4>More Details</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default featuredExample;