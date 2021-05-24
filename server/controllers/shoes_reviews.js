const express = require('express')
const ShoesReviews = require('../models/shoes_reviews').ShoeReviews
const Shoes = require('../models/shoes').Shoes
const router = express.Router()
// const { requireToken } = require('../middleware/auth')

// GET a review
router.get('/:shoesId/reviews', (req, res, next) => {
	Shoes.findById({ _id: req.params.shoesId })
		.then((shoes) => res.json(shoes.reviews))
		.catch(next)
})

// GET current user reviews
// router.get('/reviews', requireToken, (req, res, next)=> {
// 	ShoesReviews.find({ author: req.user.id })
// 		.then(reviews => res.json(reviews))
//         .catch(next)
// })

// POST a apparel review
router.post('/:shoesId/reviews', (req, res, next) => {
	ShoesReviews.create(req.body)
		.then((shoeReview) => {
			Shoes.findById(req.params.shoesId)
			.then((shoe) => {
				shoe.reviews.push(shoeReview)
				return shoe.save()
			})
		})
		.then(() => {
			res.status(201)
		})
		.catch(next)
})

// router.post('/:shoesId/reviews/create', requireToken, (req, res, next) => {
//     const newReviews = {
//         ...req.body,
//         user: req.user._id
//     }
// 	ShoesReviews.create(newReviews)
// 		.then((newReviews) => {
//             return ShoesReviews.findById(newReviews._id)
// 				.populate('user', 'username')
//         })
//         .then((newReviews) => {
//             ShoesReviews.findById({ _id: req.params.shoesId })
//                 .then((shoes) => {
//                     shoes.reviews.push(newReviews)
//                     return shoes.save()
//                 })
//                 .then((shoes) => {
//                     res.json(shoes)
//                 })
//         })
// 		.catch(next)
// })

// PUT a apparel review
// router.put('/:shoesId/reviews/:reviewsId/update', requireToken, (req, res, next) => {
// 	ShoesReviews.findById(req.params.shoesId)
//         .then((reviews) => {
//             reviews.post = req.body.post
//             return reviews.save() 
//         })
//         .then((reviews) => {
//             Shoes.findById({ _id: req.params.reviewsId })
//                 .then((shoes) => {
//                     shoes.reviews.forEach(
//                         async (aReviews) => {
//                             if (aReviews._id.toString() == reviews._id.toString()) {
//                                 aReviews.post = reviews.post
//                                 await shoes.save()
//                             }
//                         }
//                     )
//                     res.status(202)
//                 })
//                 .catch(next)
//         })
// })

// DELETE a apparel review
// router.delete('/:shoesId/reviews/:reviewsId/delete', requireToken, (req, res, next) => {
// 	ShoesReviews.findById(req.params.reviewsId)
// 		.then(() => {
//             ShoesReviews.findByIdAndDelete(req.params.reviewsId)
//                 .then((reviews) => {
//                     Shoes.findById(req.params.reviewsId)
//                         .then((shoes) => {
//                             shoes.reviews.forEach(
//                                 async (aReviews, index) => {
//                                     if (aReviews._id.toString() == reviews._id.toString()) {
//                                         shoes.reviews.splice(index, 1)
//                                         await shoes.save()
//                                     }
//                                 }
//                             )
//                         })
//                 })
//         })
//         .then(() => res.status(201))
//         .catch(next)
// })

module.exports = router
