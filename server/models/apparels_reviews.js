const mongoose = require('../db/connections')

const apparelsReviewsSchema = new mongoose.Schema({
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
	apparels: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Apparels',
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		required: true
	}
})

const ApparelsReviews = mongoose.model('ApparelsReviews', apparelsReviewsSchema);

module.exports = {ApparelsReviews, apparelsReviewsSchema}
