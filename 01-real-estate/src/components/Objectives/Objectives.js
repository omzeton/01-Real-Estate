import React, { Component } from 'react';
import './Objectives.css';

class objectives extends Component {
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
						<h2>Możesz być z siebie dumny, ale jeszcze się nie poddawaj proszę! Zostało Ci już tak niewiele!</h2>
						<ul>
							<li className="important">-ms prefix not detected by IE11.</li>
							<li className="not-important">setState inside TopMenu render() function (switching div structure issue).</li>
							<li className="important">润色: Better folder structure / Code improvement / Check if some containers are still in components folder</li>
						</ul>
						<div className="queries">
							<div className="queries__container"><div className="red"></div><h2>&#8734; - 768</h2></div>
							<div className="queries__container"><div className="green"></div><h2>768 - 992</h2></div>
							<div className="queries__container"><div className="blue"></div><h2>992 - 1200</h2></div>
							<div className="queries__container"><div className="orange"></div><h2>1200 - &#8734;</h2></div>
						</div>
					</div>
				</div>
			);
		}

};

export default objectives;