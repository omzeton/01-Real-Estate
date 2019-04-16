import React, { Component } from 'react';
import './ListYourProperty.css';
import firebase from '@firebase/app';
// eslint-disable-next-line
import { storage } from '@firebase/storage';
// eslint-disable-next-line
import { database } from '@firebase/database';
var config = {
    apiKey: "AIzaSyCeygcoPpSZ6ruHn45l63U80L8K-UQcR60",
    authDomain: "real-estate-d9a1e.firebaseapp.com",
    databaseURL: "https://real-estate-d9a1e.firebaseio.com",
    projectId: "real-estate-d9a1e",
    storageBucket: "real-estate-d9a1e.appspot.com",
    messagingSenderId: "1095628041476"
};
firebase.initializeApp(config);

class ListYourProperty extends Component {

	state = {
		object: {
			"forSale" : false,
			"img" : false,
			"info" : false,
			"price" : false,
			"id" : false,
			"type" : false,
			"town" : false,
			"toRent" : false,
			"beds" : false,
			"name" : false
		},
		selectedFile: false,
		uploaded: false
	}

	getRandomInt( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	nameHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "name": e.target.value} });
	}
	townHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "town": e.target.value} });
	}
	bedsHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "beds": e.target.value} });
	}
	priceHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "price": e.target.value} });
	}
	saleRentHandler = (e) => {
		if ( e.target.value === "forSale" ) {
			this.setState({uploaded: false, object: {...this.state.object, "forSale": true, "toRent": false}});
		} else if ( e.target.value === "toRent" ) {
			this.setState({uploaded: false, object: {...this.state.object, "forSale": false, "toRent": true}});
		}
	}
	typeHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "type": e.target.value} });
	}
	infoHandler = (e) => {
		this.setState({uploaded: false, object: {...this.state.object, "info": e.target.value} });
	}
	imgHandler = (e) => {
		this.setState({uploaded: false, selectedFile: e.target.files[0]});
	}

	uploadHanlder = () => {

		const newProperty = {
			"forSale" : this.state.object.forSale,
			"img" : this.state.selectedFile,
			"info" : this.state.object.info,
			"price" : this.state.object.price,
			"id" : this.getRandomInt(0,99999999),
			"type" : this.state.object.type,
			"town" : this.state.object.town,
			"toRent" : this.state.object.toRent,
			"beds" : this.state.object.beds,
			"name" : this.state.object.name
		};

		let imgURL;
		let	key;

		firebase.database().ref('examples').push(newProperty)
			.then(data => {
				key = data.key
				return key
			})
			.then(key => {
				const filename = newProperty.img.name
				const ext = filename.slice(filename.lastIndexOf('.'))
				return firebase.storage().ref('user-submitted/' + key + '.' + ext).put(newProperty.img)
			})
			.then(fileData => {
				imgURL = firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
				return imgURL
			})
			.then(url => {
				return firebase.database().ref('examples').child(key).update({img: url})
			})
			.then(response => {
				this.setState({uploaded: true});
				return response
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {

		const check = {
			"forSale" : this.state.object.forSale, //
			"info" : this.state.object.info, //
			"price" : this.state.object.price, //
			"type" : this.state.object.type, //
			"town" : this.state.object.town, //
			"toRent" : this.state.object.toRent, //
			"beds" : this.state.object.beds, //
			"name" : this.state.object.name, //
			"img" : this.state.selectedFile
		};

		let styleName = ""; //
		let styleTown = ""; //
		let stylePrice = "";
		let styleInfo = "";
		let styleStatus = "";
		let styleType = "";
		let styleBeds = "";
		let styleImg = "";

		if(check.name.length > 4) {
			styleName = "pass";
		} else {
			styleName = "nopass";
		}

		if(check.town.length > 4) {
			styleTown = "pass";
		} else {
			styleTown = "nopass";
		}

		if(check.info.length > 0) {
			styleInfo = "pass";
		} else {
			styleInfo = "nopass";
		}

		if(check.price.length > 0) {
			stylePrice = "pass";
		} else {
			stylePrice = "nopass";
		}

		if(check.beds) {
			styleBeds = "pass";
		} else {
			styleBeds = "nopass";
		}

		if(check.type) {
			styleType = "pass";
		} else {
			styleType = "nopass";
		}

		if(check.forSale || check.toRent) {
			styleStatus = "pass";
		} else {
			styleStatus = "nopass";
		}

		if(check.img) {
			styleImg = "pass";
		} else {
			styleImg = "nopass";
		}

		let submitStyle = this.state.uploaded ? "uploaded" : "not-uploaded";
		let submitValue = this.state.uploaded ? "Thank you!" : "Submit";

		let submit = null;
		if (this.state.selectedFile &&
			(this.state.object.forSale || this.state.object.toRent) && 
			this.state.object.info && 
			this.state.object.price &&
			this.state.object.type && 
			this.state.object.town &&
			this.state.object.beds && 
			this.state.object.name) {
			submit = <input type="submit" className={submitStyle} value={submitValue} onClick={this.uploadHanlder}/>
		} else {
			submit = <input type="submit" className="disable-submit" value={submitValue} onClick={this.uploadHanlder}/>
		}
		return (
			<div className="ListYourProperty">

					<div className="List__FormContainer">
						<div className="Form__FormContainer--img">
						</div>

						<div className="List__FormContainer--form">
							<div className="List__FormContainer--formContainer">

									<div className="List__FormContainer--title">
										<h2>List your <span>property</span></h2>
										<p>Please fill the form below to see your property in our list.</p>
									</div>
									<div className="List__FormContainer--input">

										<h3>Title of property</h3>
										<input type="text" placeholder="Name" className={styleName} value={this.state.name} onChange={this.nameHandler}/>
										<h3>Town</h3>
										<input type="text" placeholder="Town" className={styleTown} value={this.state.town} onChange={this.townHandler}/>

										<h3>Number of beds</h3>
										<select value={this.state.beds} className={styleBeds} onChange={this.bedsHandler}>
												<option value={false}>Select amount</option>
											    <option value="1+">1+</option>
											    <option value="2+">2+</option>
											    <option value="3+">3+</option>
											    <option value="4+">4+</option>
										</select>

										<h3>Price in dollars</h3>
										<input type="number" value={this.state.price} className={stylePrice} placeholder="Price" onChange={this.priceHandler}/>

										<h3>For Sale / To Rent</h3>
										<select value={this.state.saleRent} className={styleStatus} onChange={this.saleRentHandler}>
											    <option value={false}>Select status</option>
											    <option value="forSale">For Sale</option>
											    <option value="toRent">To Rent</option>
										</select>

										<h3>Type of property</h3>
										  <select value={this.state.type} className={styleType} onChange={this.typeHandler}>
											    <option value={false}>Specify type</option>
											    <option value="house">House</option>
											    <option value="bungalow">Bungalow</option>
											    <option value="apartment">Apartment</option>
											    <option value="commercial property">Commercial Property</option>
											    <option value="industrial property">Industrial Property</option>
										  </select>

										<h3>Short description</h3>
										{/*<input type="text" value={this.state.info} className={styleInfo} placeholder="info" onChange={this.infoHandler}/>*/}
										<textarea className={styleInfo} onChange={this.infoHandler}>{this.state.info}</textarea>

										<h3>Image of your property</h3>
										<input type="file" style={{display: 'none'}} ref={(input) => {this.image = input}} onChange={this.imgHandler}/>
										<button onClick={() => this.image.click()} className={styleImg}>Pick File</button>
							 	  		{submit}
									</div>
							</div>
						</div>
					</div>
			</div>
		);
	}
};

export default ListYourProperty;