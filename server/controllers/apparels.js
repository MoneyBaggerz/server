const express = require('express')
const Brands = require('../models/brands').Brands
const Apparels = require('../models/apparels').Apparels
const router = express.Router()
// const { requireToken } = require('../middleware/auth')

// Get apparels
router.get('/apparels', (req, res, next) => {
	Apparels.find({})
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// Get user apparels
// router.get('/users/apparels', requireToken, (req, res, next) => {
// 	Apparels.find({ 
// 		user: mongoose.Types.ObjectId(req.user._id)
// 	})
// 	.then((apparels) => res.json(apparels))
// 	.catch(next)
// })

// GET a apparel
router.get('/apparels/:id', (req, res, next) => {
	Apparels.findById({ _id: req.params.id })
		.then((apparels) => res.json(apparels))
		.catch(next)
})

// POST a apparel

//old version
// router.post('/apparels', (req, res, next) => {
// 	Apparels.create(req.body)
// 		.then((apparels) => res.json(apparels))
// 		.catch(next)
// })

router.post('/:brandId/apparels', (req, res, next) => {
	const newApparel = {
		...req.body,
		brand: req.params.brandId
	}
	Apparels.create(newApparel)
		.then((apparel) => {
			Brands.findByIdAndUpdate(
				{ _id: req.params.brandId },
				{ $push: { apparels:apparel } }
			).then(() => {
				res.status(201);
			});
		})
		.catch(next)
})

// PUT a apparel
router.put('/:brandId/apparels/:apparelId', (req, res, next) => {
	Apparels.findOneAndUpdate({ _id: req.params.apparelId }, req.body, { new: true })
		.then((apparel) =>
			Brands.updateOne(
				{ _id: req.params.brandId, 'apparels._id': apparel._id },
				{ $set: { 'apparels.$': apparel } }
			)
		)
		.catch(next);
})

// DELETE a apparel
router.delete('/:brandId/apparels/:apparelId', (req, res, next) => {
	
	Apparels.findByIdAndDelete(req.params.shoeId)
		.then((apparel) => {
			Brands.findByIdAndUpdate({_id:req.params.brandId},{$pull:{apparels:apparel}})
			.then((doc) => {
				res.json(doc)
			})
		}).then(() => res.status(420))
		.catch(next)
})

module.exports = router
