const express = require('express')
const ShoeReviews = require('../models/shoes_reviews')
const router = express.Router()

// Get shoes reviews
router.get('/', (req, res, next) => {
	ShoeReviews.find({})
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// GET a shoe review
router.get('/:id', (req, res, next) => {
	ShoeReviews.findById({ _id: req.params.id })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// POST a shoe review
router.post('/', (req, res, next) => {
	ShoeReviews.create(req.body)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// PUT a shoe review
router.put('/:id', (req, res, next) => {
	ShoeReviews.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// DELETE a shoe review
router.delete('/:id', (req, res, next) => {
	ShoeReviews.findByIdAndDelete(req.params.id)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

module.exports = router
