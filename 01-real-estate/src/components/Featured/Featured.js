import React from 'react';
import FeaturedExample from '../FeaturedExample/FeaturedExample';
import './Featured.css';

function Featured(props) {
	return (
		<div className="Featured">
			<FeaturedExample 
				img={"https://firebasestorage.googleapis.com/v0/b/real-estate-d9a1e.appspot.com/o/images%2F01%2F01.jpg?alt=media&token=163688f1-e881-49db-9740-1d9039f2dd3e"}
				price={"$ 1 250 000"}
				info={"Duplex for Sale"}
				city={"Loremus"}
			/>
			<FeaturedExample 
				img={"https://firebasestorage.googleapis.com/v0/b/real-estate-d9a1e.appspot.com/o/images%2F02%2F02.jpg?alt=media&token=e1bbd3c8-14bd-43ee-bd73-4be1561cdd3f"}
				price={"$ 650 000"}
				info={"House for Sale"}
				city={"Quisquam"}
			/>
			<FeaturedExample 
				img={"https://firebasestorage.googleapis.com/v0/b/real-estate-d9a1e.appspot.com/o/images%2F03%2F03.jpg?alt=media&token=013373ce-c386-4d07-9e98-709c40d138b0"}
				price={"$ 590 000"}
				info={"Apartment for Rent"}
				city={"Adipiscim"}
			/>
		</div>
	);
}

export default Featured;