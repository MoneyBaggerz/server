const express = require('express')
const Apparels = require('../models/apparels')
const router = express.Router()
const { requireToken } = require('../middleware/auth')

// Get apparels
router.get('/apparels', (req, res, next) => {
	Apparels.find({})
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// Get user apparels
router.get('/users/apparels', requireToken, (req, res, next) => {
	Apparels.find({ 
		user: mongoose.Types.ObjectId(req.user._id)
	})
	.then((apparels) => res.json(apparels))
	.catch(next)
})

// GET a apparel
router.get('/apparels/:id', (req, res, next) => {
	Apparels.findById({ _id: req.params.id })
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// POST a apparel
router.post('/apparels', (req, res, next) => {
	Apparels.create(req.body)
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// PUT a apparel
router.put('/apparels/:id', (req, res, next) => {
	Apparels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// DELETE a apparel
router.delete('/apparels/:id', (req, res, next) => {
	Apparels.findByIdAndDelete(req.params.id)
		.then((apparels) => res.json(apparels))
		.catch(next)
})

module.exports = router
