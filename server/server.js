const express =  require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

app.use(
    cors()
)
app.use(
    express.json()
)
app.use(
	express.urlencoded({
		extended: true,
	})
)

// Routes
const shoes = require('./controllers/shoes')
<<<<<<< HEAD
app.use('/', shoes)

const apparels = require('./controllers/apparels')
app.use('/', apparels)

// const brands = require('./controllers/bands')
// app.use('/', brands)

const shoeReviews = require('./controllers/shoes_reviews')
app.use('/', shoeReviews)

// const apparelsReviews = require('./controllers/apparels_reviews')
// app.use('/', apparelsReviews)
=======
const users = require('./controllers/users')
app.use('/shoes', shoes)
app.use('/users', users)
>>>>>>> user authentication & routes

dotenv.config()
const port = ('port', process.env.PORT || 4000)

// Start Server
app.listen(port)
