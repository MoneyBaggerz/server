const express = require('express')
const ApparelsReviews = require('../models/apparels_reviews')
const Apparels = require('../models/apparels')
const router = express.Router()
const { requireToken } = require('../middleware/auth')

// GET a review
router.get('/:apparelsId/reviews', (req, res, next) => {
	Apparels.findById({ _id: req.params.apparelsId })
		.then((apparels) => res.json(apparels.reviews))
		.catch(next)
})

// GET current user reviews
router.get('/reviews', requireToken, (req, res, next)=> {
	ApparelsReviews.find({ author: req.user.id })
		.then(reviews => res.json(reviews))
        .catch(next)
})

// POST a apparel review
router.post('/:apparelsId/reviews/create', requireToken, (req, res, next) => {
    const newReviews = {
        ...req.body,
        author: req.user._id
    }
	ApparelsReviews.create(newReviews)
		.then((newReviews) => {
            return ApparelsReviews.findById(newReviews._id).populate('author', 'username')
        })
        .then((newReviews) => {
            ApparelsReviews.findById({ _id: req.params.apparelsId })
                .then((apparels) => {
                    apparels.reviews.push(newReviews)
                    return apparels.save()
                })
                .then((apparels) => {
                    res.json(apparels)
                })
        })
		.catch(next)
})

// PUT a apparel review
router.put('/:apparelsId/reviews/:reviewsId/update', requireToken, (req, res, next) => {
	ApparelsReviews.findById(req.params.reviewsId)
        .then((reviews) => {
            reviews.post = req.body.post
            return reviews.save() 
        })
        .then((reviews) => {
            Apparels.findById({ _id: req.params.reviewsId })
                .then((apparels) => {
                    apparels.reviews.forEach(
                        async (aReviews) => {
                            if (aReviews._id.toString() == reviews._id.toString()) {
                                aReviews.post = reviews.post
                                await apparels.save()
                            }
                        }
                    )
                    res.status(202)
                })
                .catch(next)
        })
})

// DELETE a apparel review
router.delete('/:apparelsId/reviews/:reviewsId/delete', requireToken, (req, res, next) => {
	ApparelsReviews.findById(req.params.reviewsId)
		.then(() => {
            ApparelsReviews.findByIdAndDelete(req.params.reviewsId)
                .then((reviews) => {
                    Apparels.findById(req.params.reviewsId)
                        .then((apparels) => {
                            apparels.reviews.forEach(
                                async (aReviews, index) => {
                                    if (aReviews._id.toString() == reviews._id.toString()) {
                                        apparels.reviews.splice(index, 1)
                                        await apparels.save()
                                    }
                                }
                            )
                        })
                })
        })
        .then(() => res.status(201))
        .catch(next)
})

module.exports = router
