const mongoose = require('../db/connections')

const apparelsSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: Number,
	color: String,
	availability: Boolean,
	image: {
		data: Buffer,
		contentType: String
	},
	// brand: {
	// 	type: mongoose.Schema.Types.ObjectId,ref:'Brands'
	// }
})

module.exports = new mongoose.model('Apparels', apparelsSchema)
