import React, { Component } from 'react';
import './ListYourProperty.css';

class ListYourProperty extends Component {

	state = {
		saleRent: 'forSale',
		img: '',
		info: '',
		price: '',
		id: '',
		type: 'house',
		town: '',
		name: '',
		beds: '1+',
		object: {
			"forSale" : undefined,
			"img" : undefined,
			"info" : undefined,
			"price" : undefined,
			"id" : undefined,
			"type" : undefined,
			"town" : undefined,
			"toRent" : undefined,
			"beds" : undefined,
			"name" : undefined
		}
	}

	getRandomInt( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	nameHandler = (e) => {
		this.setState({name: e.target.value });
	}
	townHandler = (e) => {
		this.setState({town: e.target.value });
	}
	bedsHandler = (e) => {
		this.setState({beds: e.target.value });
	}
	priceHandler = (e) => {
		this.setState({price: e.target.value });
	}
	saleRentHandler = (e) => {
		this.setState({saleRent: e.target.value});
	}
	typeHandler = (e) => {
		this.setState({type: e.target.value});
	}
	infoHandler = (e) => {
		this.setState({info: e.target.value});
	}
	imgHandler = (e) => {
		this.setState({img: e.target.files[0]});
	}


	uploadHanlder = () => {
		let name = this.state.name,
			img = this.state.img,
			info = this.state.info,
			price = this.state.price,
			type = this.state.type,
			town = this.state.town,
			saleRent = this.state.saleRent,
			beds = this.state.beds,
			id = this.getRandomInt(0,99999999);
		let forSale = Boolean,
			toRent = Boolean;

		if ( saleRent === "forSale" ) {
			forSale = true;
			toRent = false;
		} else if ( saleRent === 'toRent') {
			forSale = false;
			toRent = true;
		}
		this.setState({
			object: {
				"forSale" : forSale,
				"img" : img,
				"info" : info,
				"price" : price,
				"id" : id,
				"type" : type,
				"town" : town,
				"toRent" : toRent,
				"beds" : beds,
				"name" : name
			}
		});
		console.log(this.state.object);
	}

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