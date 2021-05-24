const mongoose = require('../db/connections')
const shoes = require('./shoes').shoesSchema
const apparels = require('./apparels').apparelsSchema

const brandsSchema = new mongoose.Schema({
	name: {
        type: String,
        unique: true,
        required: true
    },
    shoes: [shoes],
    apparels: [apparels]
})

const Brands = mongoose.model('Brands', brandsSchema);

module.exports = {Brands, brandsSchema}
