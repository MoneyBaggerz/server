const mongoose = require('../db/connections')

const shoeReviewsSchema = new mongoose.Schema({
	overallRating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	size: {
		type: String,
		enun: ['small', 'medium', 'large'],
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
		required: true
	}
})

module.exports = new mongoose.model('ShoeReviews', shoeReviewsSchema)
