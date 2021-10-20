const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

//importo el controlador
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');

module.exports = function () {
	//ENDPOINTS PRODUCTOS
	router.get('/productos/listar', productsController.listarProductos);
	router.get('/productos/listar/:id', productsController.listarProductoById);
	router.post('/productos/guardar', productsController.guardarProducto);
	router.put(
		'/productos/actualizar/:id',
		productsController.actualizarProductoById
	);
	router.delete(
		'/productos/borrar/:id',
		productsController.borrarProductoById
	);
	//ENDPOINT ENTREGA22
	router.get(
		'/productos/vista-test',
		productsController.mostrarProductosAlAzar
	);

	//ENDPOINTS CARRITO
	router.get('/carrito/listar', cartController.listarCarrito);
	router.get('/carrito/listar/:id', cartController.listarCarritoById);
	router.post('/carrito/guardar/:id', cartController.guardarCarritoById);
	router.delete('/carrito/borrar/:id', cartController.borrarCarritoById);

	return router;
};
