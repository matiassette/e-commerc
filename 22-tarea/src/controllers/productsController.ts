import express, { Request, Response } from 'express';
const productos = require('../models/Products');
import faker from 'faker';

exports.listarProductos = async (req: Request, res: Response) => {
	try {
		const productos_listados = await productos.find({});
		productos_listados > 0
			? res.status(200).json(productos_listados)
			: res.status(404).json({ messages: 'NO HAY PRODUCTOS' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

exports.listarProductoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const item = await productos.findById({ id });
		item
			? res.status(200).json()
			: res.status(404).json({ error: 'ITEM NO ENCONTRADO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

exports.guardarProducto = async (req: Request, res: Response) => {
	try {
		const { title, price, thumbnail } = req.body;

		if (title && price && thumbnail) {
			const newProduct = new productos({ title, price, thumbnail });
			await newProduct.save();
			res.status(200).send(newProduct);
		} else {
			res.status(400).send({ error: 'Informacion incompleta' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

exports.actualizarProductoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { product, price, thumbnail } = req.body;
		await productos.findOneAndUpdate(
			{ id },
			{
				product,
				price,
				thumbnail,
			}
		);
		res.status(200).json({ message: 'EDITADO CON EXITO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

exports.borrarProductoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await productos.findByIdAndDelete({ id });
		res.status(200).json({ message: 'REMOVIDO CON EXITO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

exports.mostrarProductosAlAzar = async (req: Request, res: Response) => {
	try {
		let cant;
		if (!req.query.cant) {
			cant = 10;
		} else if (req.query.cant == 0) {
			res.json({ error: 'No hay cantidad' });
			return;
		} else {
			cant = req.query.cant;
		}

		const productosTest = [];
		for (let i = 0; i < cant; i++) {
			const id = i;
			const prodTemp = {
				id: id,
				nombre: faker.commerce.productName(),
				price: faker.commerce.price(),
				thumbnail: faker.image.imageUrl(),
				stock: faker.datatype.number(),
				descripcion: faker.commerce.productDescription(),
				timestamp: new Date(),
				category_id: faker.datatype.number(),
			};
			console.log(prodTemp);
		}

		res.json(productosTest);
	} catch (error) {
		res.json({ error });
	}
};
