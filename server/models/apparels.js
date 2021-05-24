const mongoose = require('../db/connections')
const reviews = require('./apparels_reviews').apparelsReviewsSchema

const apparelsSchema = new mongoose.Schema({
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

const Apparels = mongoose.model('Apparels', apparelsSchema);

module.exports = {Apparels, apparelsSchema}
