import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017/ecommerce';

mongoose.connect(URI, () => {
	console.log('DB ESTA CONECTADA A:', URI);
	console.log('ecommerce');

	mongoose.disconnect(() => {
		console.log('DB ESTA DESCONECTADA.');
	});
});
