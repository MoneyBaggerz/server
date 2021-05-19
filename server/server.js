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
app.get('/', (req, res) => { res.send('On!') })

const brands = require('./controllers/bands')
app.use('/brands', brands)

const shoes = require('./controllers/shoes')
app.use('/shoes', shoes)

// const shoeReviews = require('./controllers/shoes_reviews')
// app.use('./shoeReviews', shoeReviews)

const apparels = require('./controllers/apparels')
app.use('/apparels', apparels)

// const apparelsReviews = require('./controllers/apparels_reviews')
// app.use('/apparelsReviews', apparelsReviews)

dotenv.config()
const port = ('port', process.env.PORT || 4000)

// Start Server
app.listen(port)
