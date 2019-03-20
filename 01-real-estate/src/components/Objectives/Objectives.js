import React, { Component } from 'react';
import './Objectives.css';

class Objectives extends Component {
	state = {
		showModal: false
	}
	toggleModal = () => {
		let crt = this.state.showModal;
		this.setState({showModal: !crt});
	}
		render() {
			const modalToggle = this.state.showModal ? { right: "0em" } : { right: "-30em"}
			return (
				<div className="Objectives" style={modalToggle}>
					<div className="show">
						<div className="Objectives--toggle" onClick={this.toggleModal}></div>
						<h2>Spokojnie i powoli! Dobrze Ci idzie, naprawdę! :)</h2>
						<ul>
							<li>Loading animations in form</li>
							<li>Add more info to json file like rates, levies, province, bathrooms, contact : name, phone, surname, mail,</li>
							<li>Style the BigResult container with new data.</li>
							<li>The prices are too high for search filters! Change in json file.</li>
							<hr />
							<li>Media Queries - App has to look good on smaller devices.</li>
							<li>Better naming / Better folder structure / Code improvements / Check if some containers are still in components folder</li>
							<hr />
							<li>Hey motherfucker! You are finished! Nice job :)</li>
							<li>Loading screen?</li>
							<li>润色 on styling.</li>
						</ul>
					</div>		
				</div>
			);
		}

};

export default Objectives;