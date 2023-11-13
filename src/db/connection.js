const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URL;


exports.dbConnection = () => {
    try {
        mongoose.connect(DB_URL);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => console.log('MongoDB connection established to ' + DB_URL));
    } catch (error) {
        console.log('Something went wrong!');
    }
}