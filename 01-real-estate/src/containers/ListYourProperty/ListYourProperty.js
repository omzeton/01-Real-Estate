import React, { Component } from 'react';
import axios from 'axios';
import './ListYourProperty.css';

import firebase from '@firebase/app';
var config = {
    apiKey: "AIzaSyCeygcoPpSZ6ruHn45l63U80L8K-UQcR60",
    authDomain: "real-estate-d9a1e.firebaseapp.com",
    databaseURL: "https://real-estate-d9a1e.firebaseio.com",
    projectId: "real-estate-d9a1e",
    storageBucket: "real-estate-d9a1e.appspot.com",
    messagingSenderId: "1095628041476"
};
var firebaseApp = firebase.initializeApp(config);
// var UCRef = firebaseApp.database().ref("URLPath");

class ListYourProperty extends Component {

	state = {
		object: {
			"forSale" : true,
			"img" : undefined,
			"info" : undefined,
			"price" : undefined,
			"id" : undefined,
			"type" : "house",
			"town" : undefined,
			"toRent" : false,
			"beds" : "1+",
			"name" : undefined
		},
		selectedFile: null
	}

	getRandomInt( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	nameHandler = (e) => {
		let id = this.getRandomInt(0,99999999);
		this.setState({object: {...this.state.object, "name": e.target.value, "id": id} });
	}
	townHandler = (e) => {
		this.setState({object: {...this.state.object, "town": e.target.value} });
	}
	bedsHandler = (e) => {
		this.setState({object: {...this.state.object, "beds": e.target.value} });
	}
	priceHandler = (e) => {
		this.setState({object: {...this.state.object, "price": e.target.value} });
	}
	saleRentHandler = (e) => {
		if ( e.target.value === "forSale" ) {
			this.setState({object: {...this.state.object, "forSale": true, "toRent": false}});
		} else if ( e.target.value === "toRent" ) {
			this.setState({object: {...this.state.object, "forSale": false, "toRent": true}});
		}
	}
	typeHandler = (e) => {
		this.setState({object: {...this.state.object, "type": e.target.value} });
	}
	infoHandler = (e) => {
		this.setState({object: {...this.state.object, "info": e.target.value} });
	}
	imgHandler = (e) => {
		// this.setState({object: {...this.state.object, "img": e.target.files[0]} });
		this.setState({selectedFile: e.target.files[0]});
	}

	uploadHanlder = () => {

		const fd = new FormData();
		fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			}
		}

		let imgUrl = firebase;

		const newProperty = {
			"forSale" : this.state.object.forSale,
			"img" : this.state.object.img,
			"info" : this.state.object.info,
			"price" : this.state.object.price,
			"id" : this.state.object.id,
			"type" : this.state.object.type,
			"town" : this.state.object.town,
			"toRent" : this.state.object.toRent,
			"beds" : this.state.object.beds,
			"name" : this.state.object.name
		};

		
		axios.post('https://us-central1-real-estate-d9a1e.cloudfunctions.net/uploadFile', fd).then(response => {
			// 1 - Post image
			console.log("Posing image");})
			.catch(error => {
				console.log('failed at stage 1');
			})
		.then(() => {
			axios.get('https://real-estate-d9a1e.firebaseio.com/examples.json').then(response => {
				console.log('Getting the Url');
				console.log(imgUrl);
				console.log('Setting the "img" value to Url');
			})
			.catch(error => {
				console.log('failed at stage 2')
			});
		})
		.then(() => {
				axios.post('https://real-estate-d9a1e.firebaseio.com/examples.json', newProperty, axiosConfig)
					.then(response => {
						console.log('Pushing form with Url to server');
						console.log(response);
					})})
		.catch(error => {
					console.log('failed at stage 3');
					console.log(error);
				});
	}
	render() {

		console.log(firebaseApp);


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
										<input type="text" placeholder="Name" value={this.state.name} onChange={this.nameHandler}/>
										<h3>Town</h3>
										<input type="text" placeholder="Town" value={this.state.town} onChange={this.townHandler}/>

										<h3>Number of beds</h3>
										<select value={this.state.beds} onChange={this.bedsHandler}>
											    <option value="1+">1+</option>
											    <option value="2+">2+</option>
											    <option value="3+">3+</option>
											    <option value="4+">4+</option>
										</select>

										<h3>Price in dollars</h3>
										<input type="number" value={this.state.price} placeholder="Price" onChange={this.priceHandler}/>

										<h3>For Sale / To Rent</h3>
										<select value={this.state.saleRent} onChange={this.saleRentHandler}>
											    <option value="forSale">For Sale</option>
											    <option value="toRent">To Rent</option>
										</select>

										<h3>Type of property</h3>
										  <select value={this.state.type} onChange={this.typeHandler}>
											    <option value="house">House</option>
											    <option value="bungalow">Bungalow</option>
											    <option value="apartment">Apartment</option>
											    <option value="commercial property">Commercial Property</option>
											    <option value="industrial property">Industrial Property</option>
										  </select>

										<h3>Short description</h3>
										<input type="text" value={this.state.info} placeholder="info" onChange={this.infoHandler}/>

										<h3>Image of your property</h3>
										<input type="file" ref={(input) => {this.image = input}} onChange={this.imgHandler}/>

							 	  		<input type="submit" value="Submit" onClick={this.uploadHanlder}/>
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