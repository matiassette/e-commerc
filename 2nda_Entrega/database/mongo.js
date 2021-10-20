const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');
const Message = require('../models/MessageModel');
// let Cart_instance = new Cart();
// let product_instance = new Product();

class MongoDATABASE {
	// ----------------------------------------------------
	// CONTROLLERS PRODUCTOS
	// ----------------------------------------------------

	async listarProducts() {
		try {
			const list_products = await Product.find({});
			list_products > 0
				? list_products
				: new Error({ message: 'NO HAY PRODUCTOS' });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	async listarProductsById(id) {
		try {
			const id_product = await Product.findById({ id });
			id_product
				? id_product
				: new Error({
						message: 'PRODUCTO NO ENCONTRADO',
				  });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	async guardarProduct(product) {
		const { title, price, thumbnail } = product;
		const new_product = new Product({
			title: title,
			price: price,
			thumbnail: thumbnail,
		});

		try {
			if (title && price && thumbnail) {
				await new_product.save();
			} else {
				throw new Error({
					message: 'DEBEN ESTAR TODOS LOS CAMPOS COMPLETOS',
				});
			}
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	async actualizarProductById(product, id) {
		const { title, price, thumbnail } = product;
		try {
			await Product.findOneAndUpdate(
				{ _id: id },
				{
					title,
					price,
					thumbnail,
				}
			);
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	async borrarProductById(id) {
		try {
			await Product.findByIdAndDelete({ id });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	// ----------------------------------------------------
	// CONTROLLERS CARRITO
	// ----------------------------------------------------
	async listarCart() {
		try {
			const list_cart = await Cart.find({});
			list_cart > 0
				? list_cart
				: new Error({
						message: 'NO HAY PRODUCTOS EN EL CARRITO',
				  });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}
	async listarCartById(id) {
		try {
			const item_cart = await Cart.findById({ id });
			item_cart
				? item_cart
				: new Error({
						message: 'NO SE ENCUENTRA EL ID',
				  });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}
	//falta guardar carrito by id

	async borrarCartById(id) {
		try {
			await Cart.findByIdAndDelete({ id });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}

	// ----------------------------------------------------
	// CONTROLLERS MESSAGES
	// ----------------------------------------------------
	async listarMessages() {
		try {
			const list_messages = await Message.find({});
			list_products > 0
				? list_messages
				: new Error({ message: 'NO HAY MENSAJES' });
		} catch (error) {
			console.error(error);
			throw new Error({
				message: 'ALGO SALIO MAL',
			});
		}
	}
}

module.exports = MongoDATABASE;
