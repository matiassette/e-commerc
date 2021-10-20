/* ---------------------------------------------------------------------------------------------------- */
// Import dependencies
const express = require('express');
//importo las rutas
const routes = require('./routes');
const http = require('http');

const app = express();
const server = http.Server(app);

import { Request, Response } from 'express';
import { Product } from './lib/products';

//Instancio la clase Product para crear los productos
const memory = new Product();

const router = express.Router();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

// se setea el motor de plantilla a utilizar
app.set('view engine', 'ejs');
// directorio de archivos de plantilla
app.set('views', './views');

app.get('/', (req: Request, res: Response) => {
	res.render('form');
});

app.get('/productos/vista', (req: Request, res: Response) => {
	const productsArray = memory.getProducts();
	res.render('view', { hayProductos: true, productos: productsArray });
});

app.use('/', routes());

app.listen(8080, () => {
	console.log(`SERVER ${8080}`);
});
