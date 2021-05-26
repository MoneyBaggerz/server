const express = require('express')
const Brands = require('../models/brands').Brands
const Shoes = require('../models/shoes').Shoes
const router = express.Router()
const { upload } = require('../middleware/img')
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
router.post('/:brandId/shoes', upload.array('image', 3), (req, res, next) => {
	const newShoe = {
		...req.body,
		brand: req.params.brandId
	}
	Shoes.create(newShoe)
		.then((shoe) => {
			Brands.findByIdAndUpdate({_id:req.params.brandId},{$push:{shoes:shoe}})
			.then((doc) => {
				res.json(doc)
			})
		})
		.catch(next)
})

// PUT a shoe
router.put('/shoes/:id', upload.single('image'), (req, res, next) => {
	Shoes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((shoes) => res.json(shoes))
		.catch(next)
})

// DELETE a shoe
router.delete('/:brandId/shoes/:shoeId', (req, res, next) => {
	
	Shoes.findByIdAndDelete(req.params.shoeId)
		.then((shoe) => {
			Brands.findByIdAndUpdate({_id:req.params.brandId},{$pull:{shoes:shoe}})
		}).then(() => res.status(420))
		.catch(next)
})

module.exports = router
