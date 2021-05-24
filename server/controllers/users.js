const express = require('express');
const user = require('../models/users');
const router = express.Router()


// Get all users
router.get('/', (req, res, next) => {
    user.find({})
    .then((users) => res.json(users))
	.catch(next)
})

// Get user by id
router.get('/:id', (req, res, next) => {
	user.findById({ _id: req.params.id })
		.then((user) => {
			res.json(user)
		})
		.catch(next)
})
 
// Create the user
router.post('/', (req, res, next) => {
	user.create(req.body)
		.then((user) => res.json(user))
		.catch(next)
})

// Update the user
router.put('/:id', (req, res, next) => {
    user.findByIdAndUpdate({_id: req.params.id},  req.body, { new: true })
        .then((user) => res.json(user))
        .catch(next)
})

// Delete a user
router.delete('/:id', (req, res, next) => {
	User.findByIdAndDelete(req.params.id)
		.then((user) => res.json(user))
		.catch(next);
})

// Sign up
router.post()

module.exports = router;