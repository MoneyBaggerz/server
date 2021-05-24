const mongoose = require('../db/connections')

const usersSchema = new mongoose.Schema({
	email: String,
	password: String,
	firstName: String,
	lastName: String,
	DOB: Date,
	gender: String,
	cart: String,
	want: Boolean,
})

module.exports = new mongoose.model('Users', usersSchema)
