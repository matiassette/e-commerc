const mongoose = require('mongoose');

const productosCollection = 'productos';
const productosSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
		max: 100,
	},
	price: { type: Number, require: true },
	thumbnail: { type: String, require: true, max: 100 },
	id: {
		type: String,
		require: true,
	},
});

export const productos = mongoose.model(productosCollection, productosSchema);
