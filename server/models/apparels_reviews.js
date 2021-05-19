const mongoose = require('../db/connections')

const apparelsReviewsSchema = new mongoose.Schema({
	overallRating: Number,
	size: String,
	comfort: String,
	durability: String,
    title: String,
	// apparels: {
	// 	type: mongoose.Schema.Types.ObjectId,ref:'Apparels'
	// },
})

module.exports = new mongoose.model('ApparelsReviews', apparelsReviewsSchema)
