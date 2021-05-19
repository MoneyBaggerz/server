const mongoose = require('../db/connections')

const shoesSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: Number,
	color: String,
	availability: Boolean,
	// brand: {
	// 	type: mongoose.Schema.Types.ObjectId,ref:'Brands'
	// },
	image: {
		data: Buffer,
		contentType: String
	}
})

module.exports = new mongoose.model('Shoes', shoesSchema)
