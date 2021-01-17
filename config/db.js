const mongoose = require('mongoose');
const config = require('config');
const mongoURI = require('../keys/index').mongURI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB connected');
    }catch (err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;
