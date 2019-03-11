import React, { Component } from 'react';

class ListYourProperty extends Component {
	render() {
		return (
			<div className="ListYourProperty">
				<h2>ListYourProperty page</h2>
				{/*
					const order = {
						ingredients: this.state.ingredients,
						price: this.state.totalPrice,
						customer: {
							name: 'Dorion',
							address: {
								street: 'Sarcaneveli',
								zipCode: '88-888',
								country: 'Saparelo'
							},
							email: 'pysiks1234@test.com'
						},
						deliveryMethod:'fastest'
					}
					axios.post('/orders.json', order)
						.then(response => console.log(response))
						.catch(error => console.log(error));
				*/}
			</div>
		);
	}
};

export default ListYourProperty;