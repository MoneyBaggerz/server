const express = require('express')
const user = require('../models/users')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { requireToken, createUserToken } = require('../middleware/auth')
require('dotenv').config

// Get all users
router.get('/user', (req, res, next) => {
    user.find({})
    .then((users) => res.json(users))
	.catch(next)
})

// Get user by id
router.get('/user/:id', (req, res, next) => {
	user.findById({ _id: req.params.id })
		.then((user) => {
			res.json(user)
		})
		.catch(next)
})
 
// Update the user
router.put('/user/:id', (req, res, next) => {
    user.findByIdAndUpdate({ _id: req.params.id },  req.body, { new: true })
        .then((user) => res.json(user))
        .catch(next)
})

// Delete a user
router.delete('/user/:id', (req, res, next) => {
	user.findByIdAndDelete(req.params.id)
		.then((user) => res.json(user))
		.catch(next);
})

// Sign up 
router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => ({ email: req.body.email, password: hash }))
		.then((User) => user.create(User))
		.then((User) => res.status(201).json(User))
		.catch(next);
});

//Sign in
router.post('/signin', (req, res, next) => {
	user.findOne({ email: req.body.email })
		.then((user) => createUserToken(req, user))
		.then((token) => res.json({ 
            token,
            message: 'success',
            status: 200 
        }))
		.catch(next);
});

module.exports = router
