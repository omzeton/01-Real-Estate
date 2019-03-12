import React from 'react';
import './Bond.css';

function Bond(props) {
		return (
			<div className="Bond">
				<h2>Spokojnie i powoli! Dobrze Ci idzie, naprawdę! :)</h2>
				<ul>
					<li className="finished">Populate Firebase or MongoDB with fake data - 15 properties will sufice.</li>
					<li className="finished">Update the state with this fake data - maybe Redux will help?</li>
					<li>Store asynchrounous data from database into Redux store</li>
					<li>Searchbar - compare value of input between what is inside database.</li>
					<li>Show results - reference them by their ids and display which ones meet the limitations.</li>
					<li>Routing c.d.n. - display via link the full page of a result. Example localhost:3000/property?id=1260.</li>
					<li>Routing security - if user inputs something in the browser show 404 page.</li>
					<li>Filters - display results with appropriate filtering.</li>
					<li>For Sale - Display every result with 'for sale' category on true.</li>
					<li>To Rent - Display every result with 'to rent' category on true.</li>
					<li>List your property - push origin database with any inputted data! *also image!*</li>
					<li>Check if the inputted data shows in search results.</li>
					<li>Hey motherfucker! You are finished! Nice job :)</li>
					<li>Create bond calculator.</li>
					<li>Loading screen?</li>
					<li>润色 on styling.</li>
				</ul>
			</div>
		);
};

export default Bond;