const mongoose = require('../db/connections')

const shoeReviewsSchema = new mongoose.Schema({
	overallRating: Number,
	size: String,
	comfort: String,
	durability: String,
    title: String,
	// shoes: {
	// 	type: mongoose.Schema.Types.ObjectId,ref:'Shoes'
	// },
})

module.exports = new mongoose.model('ShoeReviews', shoeReviewsSchema)
