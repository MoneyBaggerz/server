const mongoose = require('../db/connections')

const shoesSchema = new mongoose.Schema({
	name: String,
	price: Number
})

module.exports = new mongoose.model('Shoes', shoesSchema)
