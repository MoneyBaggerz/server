const mongoose = require('../db/connections')
const ShoeReviews = require('./shoes_reviews').shoeReviewsSchema

const shoesSchema = new mongoose.Schema({
	name: String,
	price: Number,
	size: [Number],
	color: [String],
	availability: {
		type: Boolean,
		required: true
	},
	image: [{
		data: Buffer,
		contentType: String
	}],
	reviews: [ShoeReviews],
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'Brands',
		required: true
	}
})

const Shoes = mongoose.model('Shoes', shoesSchema);

module.exports = {Shoes, shoesSchema}
