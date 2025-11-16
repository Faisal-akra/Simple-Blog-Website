const mongoose = require('mongoose');


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongoose is Connected Successfully')
    } catch (error) {
        console.log('Mongoose is not connnected!')
    }
}

module.exports = connectDB;