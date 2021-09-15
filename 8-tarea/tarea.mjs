// >> Consigna: Realizar un proyecto de servidor basado en node.js que permita listar e incorporar ítems dentro de un array de productos en memoria.
// Cada producto estará representado por un objeto con el siguiente formato
// {
//     title: (nombre del producto),
//     price: (precio),
//     thumbnail: (url al logo o foto del producto)
// }
// Para el caso de que se liste en forma individual un producto que no exista, se devolverá el objeto: {error : 'producto no encontrado'}
// En caso de no haber productos en el listado total, se retornará el objeto: {error : 'no hay productos cargados'}
// Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman.

// Aclaración:
// El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;
// classes

class Memory {
  constructor() {
    this.array = [];
    this.contador = 0;
  }

  getArray = () => {
    return this.array;
  };

  getElementById = (id) => {
    const elementById = this.array.find((element) => element.id == id);
    return elementById;
  };

  addElement = (object) => {
    this.array.push({ ...object, id: this.contador++ });
    this.count++;
    return object;
  };
}

const memory = new Memory();

app.get('/api/productos/listar', (req, res) => {
  const resultado = memory.getArray();
  if (resultado.length > 0) {
    res.status(200).send(JSON.stringify(resultado));
  } else {
    res.status(422).send({ error: 'ERROR! NO HAY PRODUCTOS CARGADOS' });
  }
});

app.get('/api/productos/listar/:id', (req, res) => {
  const { id } = req.params;
  const resultado = memory.getElementById(id);

  if (resultado.length > 0) {
    res.status(200).send(JSON.stringify(resultado[0]));
  } else {
    res.status(422).send({ error: 'ERROR! NO HAY PRODUCTOS CARGADOS' });
  }
});

app.post('/api/productos/guardar', (req, res) => {
  const producto = req.body;
  if (producto.precio && producto.title && producto.thumbnail) {
    memory.addElement(producto);
    res.status(200).send(producto);
  } else {
    res.status(400).send({ error: 'Informacion incompleta' });
  }
});

app.listen(port, () => {
  console.log(`SERVER CORRIENDO EN EL PUERTO ${port}`);
});