const express = require('express')
const Brands = require('../models/brands').Brands
const router = express.Router()

// Get brands
router.get('/brands', (req, res, next) => {
	Brands.find({})
		.then((brands) => res.json(brands))
		.catch(next)
})

// GET a brand
router.get('/brands/:id', (req, res, next) => {
	Brands.findById({ _id: req.params.id })
		.then((brands) => res.json(brands))
		.catch(next)
})

// POST a brand
router.post('/brands', (req, res, next) => {
	Brands.create(req.body)
		.then((brands) => res.json(brands))
		.catch(next)
})

// PUT a brand
router.put('/brands/:id', (req, res, next) => {
	Brands.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((brands) => res.json(brands))
		.catch(next)
})

// DELETE a brand
router.delete('/brands/:id', (req, res, next) => {
	Brands.findByIdAndDelete(req.params.id)
		.then((brands) => res.json(brands))
		.catch(next)
})

module.exports = router
