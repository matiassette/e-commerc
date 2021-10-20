import express, { Request, Response } from 'express';
const carrito = require('../models/Cart');

exports.listarCarrito = async (req: Request, res: Response) => {
	try {
		const carrito_listado = await carrito.find({});
		carrito_listado > 0
			? res.status(200).json(carrito_listado)
			: res
					.status(404)
					.json({ messages: 'NO HAY PRODUCTOS EN EL CARRITO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};
exports.listarCarritoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const item_carrito = await carrito.findById({ id });
		item_carrito
			? res.status(200).json()
			: res.status(404).json({ error: 'ITEM NO ENCONTRADO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};

//FALTA REFACTORIZAR ESTA PARTE
// exports.guardarCarritoById =  (req: Request, res: Response) => {
// 	const { id } = req.params;
// 	const check = memory.products.find((x) => x.id === Number(id));
// 	if (check) {
// 		cart.addProduct(check);
// 		res.status(200).send({ todoOk: 'se agregó tu producto' });
// 		console.log(cart.products);
// 		console.log(check);
// 	} else {
// 		res.status(400).send({ error: 'ERROR! NO HAY PRODUCTOS CARGADOS' });
// 	}
// }

exports.borrarCarritoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await carrito.findByIdAndDelete({ id });
		res.status(200).json({ message: 'REMOVIDO CON EXITO' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'ALGO SALIO MAL' });
	}
};
