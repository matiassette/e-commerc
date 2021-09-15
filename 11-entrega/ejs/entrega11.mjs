// >> Consigna:  Sobre el proyecto entregable de la clase anterior, incorporar y configurar el motor de plantillas handlebars para que permita ver mediante la ruta get '/productos/vista' los productos cargados.
// >> Aspectos a incluir en el entregable:
// - Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
// - En el caso de no encontrarse datos, devolver el mensaje: 'No hay productos'
// - Utilizar bootstrap para maquetar la vista creada por dicho motor de plantillas.
// - Maquetar con bootstrap el formulario de ingreso de productos. Al guardar el producto, se debe redirigir la vista al formulario vacío.
// >> Sugerencias:
// - Utilizar iconfinder (https://www.iconfinder.com/free_icons) para obtener la url de las imágenes de los productos (click derecho sobre la imagen -> copiar dirección de la imagen)
// - Probar desde postman las demás funciones (act ualizar y borrar producto) y ver el resultado reflejado en la tabla de productos.

import express from 'express';
import path from 'path';
import { Productos } from './productos.mjs';

const app = express();
const router = express.Router();
const port = 8080;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));

app.use('/', express.static(path.resolve() + '/public'));

app.use('/api', router);

// se setea el motor de plantilla a utilizar
app.set('view engine', 'ejs');
// directorio de archivos de plantilla
app.set('views', './views');

const memory = new Productos();

app.get('/', (req, res) => {
  res.render('form');
});

app.get('/productos/vista', (req, res) => {
  const productsArray = memory.getProducts();
  res.render('view', { hayProductos: true, productos: productsArray });
});

router.get('/productos/listar', (req, res) => {
  const resultado = memory.getProducts();
  if (resultado.length > 0) {
    res.status(200).send(JSON.stringify(resultado));
  } else {
    res.status(422).send({ error: 'ERROR! NO HAY PRODUCTOS CARGADOS' });
  }
});

router.get('/productos/listar/:id', (req, res) => {
  const { id } = req.params;
  const resultado = memory.getProductById(id);
  console.log(resultado);
  if (resultado) {
    res.status(200).send(JSON.stringify(resultado));
  } else {
    res.status(400).send({ error: 'ERROR! NO HAY PRODUCTOS CARGADOS' });
  }
});

router.post('/productos/guardar', (req, res) => {
  const producto = req.body;
  if (producto.price && producto.title && producto.thumbnail) {
    memory.addProduct(producto);
    // res.status(200).send(producto);
    res.redirect('/');
  } else {
    res.status(400).send({ error: 'Informacion incompleta' });
  }
});
//ENTREGA 9
//ROUTE

router.put('/productos/actualizar/:id', (req, res) => {
  const { id } = req.params;

  const newProduct = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
    id: Number(id),
  };

  if (newProduct.price && newProduct.title && newProduct.thumbnail) {
    const cocinado = memory.updateProduct(newProduct, id);
    res.status(200).send(JSON.stringify(cocinado));
  } else {
    res.status(400).send({ error: 'ERROR!' });
  }
});

router.delete('/productos/borrar/:id', (req, res) => {
  const { id } = req.params;
  const resultado = memory.getProductById(id);
  if (resultado) {
    res.status(200).send(JSON.stringify(memory.deleteProduct(id)));
  } else {
    res.status(400).send({ error: 'ERROR! NO SE ENCUENTRA EL ID' });
  }
});

app.listen(port, () => {
  console.log(`SERVER CORRIENDO EN EL PUERTO ${port}`);
});
