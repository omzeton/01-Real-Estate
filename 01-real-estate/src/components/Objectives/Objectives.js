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
						<h2>Jeszcze się nie poddawaj proszę! Zostało Ci już tak niewiele!</h2>
						<ul>
							<li>Loader in form </li>
							<li>Cloud function - if file has the same as before rename to sth unique.</li>
							<li>Move imgs into user-submitted folder and then getURL</li>
							<hr />
							<li><b>Grid</b> and <b>sudo</b> dont work on my phone</li>
							<li>CSSTransitions</li>
							<li>润色: Better folder structure / Code improvements / Check if some containers are still in components folder</li>
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

export default Objectives;