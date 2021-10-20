const mongoose = require('mongoose');

const messagesCollection = 'messages';
const messageSchema = new mongoose.Schema({
	messages: [
		{
			name: { type: String, require: true },
			message: { type: String, require: true },
		},
	],
});

Message = mongoose.model(messagesCollection, messageSchema);

module.exports = Message;
