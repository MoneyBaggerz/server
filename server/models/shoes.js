const mongoose = require('../db/connections')
const reviews = require('./shoes_reviews')

const shoesSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: [Number],
	color: [String],
	availability: {
		type: Boolean,
		required: true
	},
	reviews: [reviews],
	image: {
		data: Buffer,
		contentType: String
	},
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'Brands',
		required: true
	}
})

module.exports = new mongoose.model('Shoes', shoesSchema)
