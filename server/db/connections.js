const mongoose = require('mongoose')
const mongooseURI = 'mongodb+srv://admin-simi:123simiAD@cluster0.spcgq.mongodb.net/MoneyBaggerzDatabase?retryWrites=true&w=majority'

mongoose
    .connect(mongooseURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then((instance) => {
        console.log(`connected to db: ${ instance.connections[0].name }`)
    })
    .catch((error) => console.log('Connection Failed', error))

module.exports = mongoose
