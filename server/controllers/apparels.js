const express = require('express')
const Apparels = require('../models/apparels')
const router = express.Router()

// Get apparels
router.get('/', (req, res, next) => {
	Apparels.find({})
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// GET a apparel
router.get('/:id', (req, res, next) => {
	Apparels.findById({ _id: req.params.id })
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// POST a apparel
router.post('/', (req, res, next) => {
	Apparels.create(req.body)
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// PUT a apparel
router.put('/:id', (req, res, next) => {
	Apparels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// DELETE a apparel
router.delete('/:id', (req, res, next) => {
	Apparels.findByIdAndDelete(req.params.id)
		.then((apparels) => res.json(apparels))
		.catch(next)
})

module.exports = router
