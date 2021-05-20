const mongoose = require('../db/connections')
const shoes = require('./shoes')
const apparels = require('./apparels')

const brandsSchema = new mongoose.Schema({
	name: {
        type: String,
        unique: true,
        required: true
    },
    shoes: [shoes],
    apparels: [apparels]
})

module.exports = new mongoose.model('Brands', brandsSchema)
