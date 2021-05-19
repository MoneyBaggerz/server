const express = require('express')
const Brands = require('../models/brands')
const router = express.Router()

// Get brands
router.get('/', (req, res, next) => {
	Brands.find({})
		.then((brands) => res.json(brands))
		.catch(next)
})

// GET a brand
router.get('/:id', (req, res, next) => {
	Brands.findById({ _id: req.params.id })
		.then((brands) => res.json(brands))
		.catch(next)
})

// POST a brand
router.post('/', (req, res, next) => {
	Brands.create(req.body)
		.then((brands) => res.json(brands))
		.catch(next)
})

// PUT a brand
router.put('/:id', (req, res, next) => {
	Brands.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((brands) => res.json(brands))
		.catch(next)
})

// DELETE a brand
router.delete('/:id', (req, res, next) => {
	Brands.findByIdAndDelete(req.params.id)
		.then((brands) => res.json(brands))
		.catch(next)
})

module.exports = router
