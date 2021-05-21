const express = require('express')
const Shoes = require('../models/shoes')
const router = express.Router()
const { requireToken } = require('../middleware/auth')

// Get shoes
router.get('/shoes', (req, res, next) => {
	Shoes.find({})
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// Get user shoes
// router.get('/users/shoes', requireToken, (req, res, next) => {
// 	Shoes.find({ 
// 		user: mongoose.Types.ObjectId(req.user._id)
// 	})
// 	.then((shoes) => res.json(shoes))
// 	.catch(next)
// })

// GET a shoe
router.get('/shoes/:id', (req, res, next) => {
	Shoes.findById({ _id: req.params.id })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// POST a shoe
router.post('/shoes', (req, res, next) => {
	Shoes.create(req.body)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// PUT a shoe
router.put('/shoes/:id', (req, res, next) => {
	Shoes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// DELETE a shoe
router.delete('/shoes/:id', (req, res, next) => {
	Shoes.findByIdAndDelete(req.params.id)
		.then((shoes) => res.json(shoes))
		.catch(next)
})

module.exports = router
