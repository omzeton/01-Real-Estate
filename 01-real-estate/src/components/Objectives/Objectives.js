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
						<h2>Odwaliłeś KAWAŁ świetnej roboty. Jesteś zajebisty ziom. Ale jeszcze się nie poddawaj! :)</h2>
						<ul>
							<li>Loader in form </li>
							<li>Cloud function - if file has the same as before rename to sth unique.</li>
							<hr />
							<li>Media Queries - App has to look good on smaller devices.</li>
							<li>Better naming / Better folder structure / Code improvements / Check if some containers are still in components folder</li>
							<hr />
							<li>润色 on styling.</li>
						</ul>
					</div>		
				</div>
			);
		}

};

export default Objectives;