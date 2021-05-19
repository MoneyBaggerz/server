const mongoose = require('../db/connections')

const shoeReviewsSchema = new mongoose.Schema({
	overallRating: {
		type: Number,
		required: true
	},
	size: {
		type: String,
		required: true
	},
    title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	comfort: String,
	durability: String,
	timeOfReview: { 
		type: Date, 
		default: Date.now 
	},
	shoes: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Shoes', 
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		require: true
	}
})

module.exports = new mongoose.model('ShoeReviews', shoeReviewsSchema)
