const express = require('express')
const shoes = require('../models/shoes')
const router = express.Router()

// Get all shoes
router.get('/', (req, res, next) => {
	shoes.find({})
		.then((entry) => res.json(entry))
		.catch(next)
})

module.exports = router
