import React from 'react';
import './Bond.css';

function Bond(props) {
		return (
			<div className="Bond">
				<h2>Spokojnie i powoli! Dobrze Ci idzie, naprawdę! :)</h2>
				<ul>
					<li>Set state of search to deafult on every Route Change.</li>
					<li>The prices are too high for search filters! Expand them in search bar or change in json file.</li>
					<hr />
					<li className="finished">Routing c.d.n. - display via link the full page of a result. Example localhost:3000/property?id=1260.</li>
					<li>Routing security - if user inputs something in the browser show 404 page.</li>
					<li>Style the shit out of BigResult container - maybe turn it into a component instead.</li>
					<li>Add 'featured' data to samples and display 3 random properties with that attribute set to true.</li>
					<hr />
					<li>List your property - push origin database with any inputted data! *also image!*</li>
					<li>Featured container has wrong height</li>
					<li>Check if the inputted data shows in search results.</li>
					<li>Create bond calculator.</li>
					<li>Better naming / Better folder structure / Code improvements / Check if some containers are still in components folder</li>
					<hr />
					<li>Hey motherfucker! You are finished! Nice job :)</li>
					<li>Loading screen?</li>
					<li>润色 on styling.</li>
				</ul>
			</div>
		);
};

export default Bond;