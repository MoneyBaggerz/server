const mongoose = require('../db/connections')
const reviews = require('./shoes_reviews')
const nanoid = require('nanoid')

const shoesSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	price: Number,
	size: [Number],
	color: [String],
	availability: {
		type: Boolean,
		required: true
	},
	// reviews: [reviews],
	image: {
		data: Buffer,
		contentType: String
	},
	// brand: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref:'Brands',
	// 	required: true
	// }
})

module.exports = new mongoose.model('Shoes', shoesSchema)
