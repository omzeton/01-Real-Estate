import React, { Component } from 'react';
import './ListYourProperty.css';

class ListYourProperty extends Component {

	state = {
		selectedFile: null
	}

	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	}

	// fileUploadHandler = () => {
	// 	axios.post('')
	// }

	render() {
		return (
			<div className="ListYourProperty">

					<div className="List__FormContainer">
						<div className="Form__FormContainer--img">
						</div>

						<div className="List__FormContainer--form">
							<div></div>
							<div className="List__FormContainer--formContainer">

									<div className="List__FormContainer--title">
										<h2>List your property</h2>
									</div>
									<div className="List__FormContainer--input">
										<h3>Title of property</h3>
										<input type="text" name="name" placeholder="Name" ref={(input) => {this.name = input}}/>
										<h3>Town</h3>
										<input type="text" name="town" placeholder="Town" ref={(input) => {this.town = input}}/>
										<h3>Number of beds</h3>
										<select name="beds" ref={(select) => {this.beds = select}}>
											    <option value="1+">1+</option>
											    <option value="2+">2+</option>
											    <option value="3+">3+</option>
											    <option value="4+">4+</option>
										</select>
										<h3>Price in dollars</h3>
										<input type="number" name="price" placeholder="Price" ref={(input) => {this.price = input}}/>
										<h3>Type of property</h3>
										  <select name="type" ref={(select) => {this.type = select}}>
											    <option value="house">House</option>
											    <option value="bungalow">Bungalow</option>
											    <option value="apartment">Apartment</option>
											    <option value="commercial property">Commercial Property</option>
											    <option value="industrial property">Industrial Property</option>
										  </select>
										<h3>Short description</h3>
										<input type="text" name="info" placeholder="info" ref={(input) => {this.info = input}}/>
										<h3>Image of your property</h3>
										<input type="file" onChange={this.fileSelectedHandler}/>
							 	  		<input type="submit" value="Submit" onClick={this.fileUploadHandler}/>
									</div>
							</div>
							<div></div>
						</div>
					</div>
			</div>
		);
	}
};

export default ListYourProperty;