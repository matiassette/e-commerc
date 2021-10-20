// import express, e inicializacion
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io');
const ioServer = io(http);
const router = express.Router();
const port = 8080;
const MongoDATABASE = require('./database/mongo');
require('dotenv').config();
const mongoose = require('mongoose');
// ----------------------------------------------------
// importacion de databases
// ----------------------------------------------------
//conecto db
mongoose
	.connect(process.env.DATABASE)
	.then(() => console.log('***DB CONNECTED***'))
	.catch((error) => console.log(`***DB CONNECTION ERROR => ${error}***`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', router);

// se setea el motor de plantilla a utilizar
app.set('view engine', 'ejs');
// directorio de archivos de plantilla
app.set('views', './views');

const memory = [];
let mongoDB = new MongoDATABASE();

app.get('/', (req, res) => {
	res.render('form.ejs');
});

//ENDPOINTS PRODUCTOS

app.get('/productos/vista', (req, res) => {
	res.render('view', { hayProductos: true, productos: memory });
});

router.get('/productos/listar', (req, res) => {
	mongoDB.listarProducts();
});

router.get('/productos/listar/:id', (req, res) => {
	const id = req.params.id;
	mongoDB.listarProductsById(id);
	res.redirect('/');
});

router.post('/productos/guardar', (req, res) => {
	const product = req.body;
	if (product.title && product.price && product.thumbnail) {
		memory.push(product);
		mongoDB.guardarProduct(product);
		res.redirect('/');
	} else {
		res.status(400).send({ error: 'Informacion incompleta' });
	}
});

router.put('/productos/actualizar/:id', (req, res) => {
	const id = req.params.id;
	const product = req.body;
	if (product.title && product.price && product.thumbnail) {
		memory.push(product);
		mongoDB.actualizarProductById(product, id);
		res.redirect('/');
	} else {
		res.status(400).send({ error: 'Informacion incompleta' });
	}
});

router.delete('/productos/borrar/:id', (req, res) => {
	const id = req.params.id;
	mongoDB.borrarProductById(id);
	res.redirect('/');
});

//ENDPOINTS CARRITO
router.get('/carrito/listar', (req, res) => {
	mongoDB.listarCart();
	res.redirect('/');
});
router.get('/carrito/listar/:id', (req, res) => {
	const id = req.params.id;
	mongoDB.listarCartById(id);
	res.redirect('/');
});
//FALTA ESTE METODO
router.post('/carrito/guardar/:id', (req, res) => {});
router.delete('/carrito/borrar/:id', (req, res) => {
	const id = req.params.id;
	mongoDB.borrarCartById(id);
	res.redirect('/');
});

const mensajes = [
	{
		nombre: 'brian',
		text: 'hola a todos',
	},
];

http.listen(port, () => {
	console.log(`SERVER CORRIENDO EN EL PUERTO ${port}`);
});
ioServer.on('connection', (socket) => {
	console.log('Un cliente se ha conectado');
	socket.emit('mensajes', mensajes);

	socket.on('new-message', (data) => {
		mensajes.push(data);
		ioServer.sockets.emit('mensajes', mensajes);
	});
});
