const mongoose = require('../db/connections')
const ShoeReviews = require('./shoes_reviews')

const shoesSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: [Number],
	color: [String],
	availability: {
		type: Boolean,
		required: true
	},
	image: {
		data: Buffer,
		contentType: String
	},
	reviews: [ShoeReviews]
	// reviews: [{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'ShoeReviews'
	// }]
	// brand: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref:'Brands',
	// 	required: true
	// }
})

module.exports = new mongoose.model('Shoes', shoesSchema)
