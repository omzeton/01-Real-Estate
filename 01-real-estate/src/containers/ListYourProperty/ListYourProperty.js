import React, { Component } from 'react';
import axios from 'axios';
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

					<div className="Form__FormContainer">
						<div className="Form__FormContainer--header">
							<h2>Fill in information about your property.</h2>
						</div>

						<div className="Form__FormContainer--form">

							<div>
								<h3>Title of property</h3>
								<input type="text" name="name" placeholder="Name" ref={(input) => {this.name = input}}/>
							</div>

							<div>
								<h3>Town</h3>
								<input type="text" name="town" placeholder="Town" ref={(input) => {this.town = input}}/>
							</div>
							<div>
								<h3>Number of beds</h3>
								<select name="beds" ref={(select) => {this.beds = select}}>
									    <option value="1+">1+</option>
									    <option value="2+">2+</option>
									    <option value="3+">3+</option>
									    <option value="4+">4+</option>
								</select>
							</div>
							<div>
								<h3>Price in dollars</h3>
								<input type="number" name="price" placeholder="Price" ref={(input) => {this.price = input}}/>
							</div>
							<div>
								<h3>Type of property</h3>
								  <select name="type" ref={(select) => {this.type = select}}>
									    <option value="house">House</option>
									    <option value="bungalow">Bungalow</option>
									    <option value="apartment">Apartment</option>
									    <option value="commercial property">Commercial Property</option>
									    <option value="industrial property">Industrial Property</option>
								  </select>
							</div>
							<div>
								<h3>Short description</h3>
								<input type="text" name="info" placeholder="info" ref={(input) => {this.info = input}}/>
							</div>
							<div>
								<h3>Image of your property</h3>
								<input type="file" onChange={this.fileSelectedHandler}/>
							</div>
							 <div>
					 	  		<input type="submit" value="Submit" onClick={this.fileUploadHandler}/>
							 </div>
						</div>
					</div>
			</div>
		);
	}
};

export default ListYourProperty;