import React from 'react';
import FeaturedExample from '../FeaturedExample/FeaturedExample';
import './Featured.css';

function Featured(props) {
	return (
		<div className="Featured">
			<FeaturedExample 
				img={1}
				price={"$ 1 250 000"}
				info={"Duplex for Sale"}
				city={"Loremus"}
			/>
			<FeaturedExample 
				img={2}
				price={"$ 650 000"}
				info={"House for Sale"}
				city={"Quisquam"}
			/>
			<FeaturedExample 
				img={3}
				price={"$ 590 000"}
				info={"Apartment for Rent"}
				city={"Adipiscim"}
			/>
		</div>
	);
}

export default Featured;