import React from 'react';
import './Bond.css';

function Bond(props) {
		return (
			<div className="Bond">
				<h2>Spokojnie i powoli! Dobrze Ci idzie, naprawdę! :)</h2>
				<ul>
					<li className="finished">Searchbar - compare value of input between what is inside database.</li>
					<li className="finished">Show results - reference them by their ids and display which ones meet the limitations.</li>
					<li>Clean up State on Route Change.</li>
					<li className="finished">Find properties between minPrice and maxPrice</li>
					<li>The prices are too high for search filters! Expand them in search bar or change in json file.</li>
					<hr />
					<li>Routing c.d.n. - display via link the full page of a result. Example localhost:3000/property?id=1260.</li>
					<li>Routing security - if user inputs something in the browser show 404 page.</li>
					<li>Style the shit out of BigResult container - maybe turn it into a component instead.</li>
					<hr />
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