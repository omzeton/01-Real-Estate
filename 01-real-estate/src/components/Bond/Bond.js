import React from 'react';
import './Bond.css';

function Bond(props) {
		return (
			<div className="Bond">
				<h2>Spokojnie i powoli! Dobrze Ci idzie, naprawdę! :)</h2>
				<ul>
					<li className="finished">Display 5 properties per page</li>
					<li>/ to /properties resets state</li>
					<li>The prices are too high for search filters! Change in json file.</li>
					<hr />
					<li>Style the BigResult container + add more details to json file</li>
					<li>Add more info to json file like rates, levies, province, bathrooms, contact : name, phone, surname, mail,</li>
					<hr />
					<li>List your property - push origin database with any inputted data! *also image!*</li>
					<li>Dive deep into Firebase functions.</li>
					<li className="bug">Wrong height on featured container</li>
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