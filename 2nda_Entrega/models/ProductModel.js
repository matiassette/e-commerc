const mongoose = require('mongoose');

const productsCollection = 'products';
const productSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
		max: 100,
	},
	price: { type: Number, require: true },
	thumbnail: { type: String, require: true, max: 100 },
	id: {
		type: Number,
		require: true,
	},
});

Product = mongoose.model(productsCollection, productSchema);
module.exports = Product;
