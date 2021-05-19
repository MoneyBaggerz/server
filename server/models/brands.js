const mongoose = require('../db/connections')

const brandsSchema = new mongoose.Schema({
	name: String,
    shoes: [
        {
            type: mongoose.Schema.Types.ObjectId,ref:'Shoes'
        }
    ]
})

module.exports = new mongoose.model('Brands', brandsSchema)
