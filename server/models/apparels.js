const mongoose = require('../db/connections')
const reviews = require('./apparels_reviews')

const apparelsSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: [Number],
	color: [String],
	availability: Boolean,
	reviews: [reviews],
	image: {
		data: Buffer,
		contentType: String
	},
	brand: {
		type: mongoose.Schema.Types.ObjectId, ref:'Brands', required: true
	}
})

module.exports = new mongoose.model('Apparels', apparelsSchema)
