
import express from 'express';
import fs from 'fs';
// _____________________________________________________
// FUNCIONES
const leerArchivo = async () => {
  const productos = {};
  await fs.promises.readFile('./productos.txt', 'utf-8').then((content) => {
    let obj = JSON.parse(content);
    let array = [];
    for (const key in obj) {
      array.push(obj[key].title);
    }
    productos.items = array;
    productos.cantidad = array.length;
    productos.visitas = 0;
    return productos;
  });
  return productos;
};
const numeroRandom = (param) => {
  return Math.floor(Math.random() * param);
};
// _____________________________________________________
// SERVER VARIABLES
const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`SERVIDOR CORRIENDO EN ${port}`);
});
// SERVER INIT
// #########################################################
server.on('error', (error) => {
  console.error(error);
});
// #########################################################

const respuesta = await leerArchivo();
app.get('/items', (_, response) => {
  ++respuesta.visitas;
  response.send({ ...respuesta });
});
// #########################################################
const random = {
  item: null,
  visitas: 0,
};
app.get('/item-random', (_, response) => {
  random.item = respuesta.items[numeroRandom(respuesta.cantidad)];
  ++random.visitas;
  response.send({ ...random });
});
// #########################################################
app.get('/visitas', (_, response) => {
  const visitas = {
    visitas: {
      items: respuesta.visitas,
      item: random.visitas,
    },
  };
  response.send({ ...visitas });
});
