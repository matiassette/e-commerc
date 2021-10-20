const mongoose = require('mongoose');

const cartCollection = 'cart';
const cartSchema = new mongoose.Schema({
	products: [
		{
			title: { type: String, require: true },
			price: { type: Number, require: true },
			thumbail: { type: String, require: true },
			id: { type: Number },
		},
	],
});

export const carrito = mongoose.model(cartCollection, cartSchema);
