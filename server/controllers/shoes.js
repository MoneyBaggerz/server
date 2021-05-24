const express = require('express')
const Brands = require('../models/brands').Brands
const Shoes = require('../models/shoes').Shoes
const router = express.Router()
// const { requireToken } = require('../middleware/auth')

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
router.post('/:brandId/shoes', (req, res, next) => {
	const newShoe = {
		...req.body,
		brand: req.params.brandId
	}
	Shoes.create(newShoe)
		.then((shoe) => {
			Brands.findById(req.params.brandId)
			.then((brand) => {
				brand.shoes.push(shoe)
				return brand.save()
			})
			.then(() => {
				res.status(201)
			})
		})
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
