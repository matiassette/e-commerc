const { options } = require('./options/SQLite3');
const knex = require('knex')(options);

const products = [
	{
		title: 'producto1',
		price: 100,
		thumbnail:
			'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
	},
	{
		title: 'producto2',
		price: 100,
		thumbnail:
			'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
	},
	{
		title: 'producto3',
		price: 100,
		thumbnail:
			'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
	},
];
/* Crear tabla de productos */
knex.schema
	.dropTableIfExists('productos')
	.createTable('productos', (table) => {
		table.string('title');
		table.int('price');
		table.string('thumbnail');
		table.increments('id');
	})
	.then(console.log('Table created'));

/* Cargar productos predeterminados en DB */
knex('productos')
	.insert(products)
	.then(() => console.log('Products inserted.'))
	.catch((err) => console.log(err));
