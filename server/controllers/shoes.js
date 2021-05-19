const express = require('express')
const Shoes = require('../models/shoes')
const router = express.Router()

// Get shoes
router.get('/', (req, res, next) => {
	Shoes.find({})
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// GET a shoe
router.get('/:id', (req, res, next) => {
	Shoes.findById({ _id: req.params.id })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// POST a shoe
router.post('/', (req, res, next) => {
	Shoes.create(req.body)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// PUT a shoe
router.put('/:id', (req, res, next) => {
	Shoes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// DELETE a shoe
router.delete('/:id', (req, res, next) => {
	Shoes.findByIdAndDelete(req.params.id)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

module.exports = router
