const mongoose = require('mongoose')


const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log("MongoDB Connect")
    }).catch((err) => {
        throw new Error(err.message)
    })
}

module.exports = db