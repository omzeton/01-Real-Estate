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
							<hr />
							<li>CSSTransitions</li>
							<li className="finished">On Hamburger click add is-active class.</li>
							<li className="finished">
								Media Queries - App has to look good on smaller devices:
								<ol>
									<li>"For Sale" + "To Rent"</li>
									<li className="finished">TopMenu</li>
									<li className="finished">ResultBig</li>
									<li className="finished">Featured</li>
									<li className="finished">ListYourProperty</li>
									<li className="finished">Result</li>
									<li className="finished">SearchBar</li>
									<li className="finished">Home</li>
									<li className="finished">Filter</li>
									<li className="finished">About</li>
									<li className="finished">Footer</li>
								</ol>
							</li>
							<li>In extreme scaling few elements break the page:
								<ol>
									<li className="finished">Text in Footer</li>
									<li className="finished">Text in Sort</li>
									<li className="finished">Text in About</li>
									<li className="finished">Inputs + Text in ListYourProperty</li>
								</ol>
							</li>
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