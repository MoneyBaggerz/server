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

const shoes = require('./controllers/shoes')
app.use('/shoes', shoes)

dotenv.config()
const port = ('port', process.env.PORT || 4000)

// Start Server
app.listen(port)
