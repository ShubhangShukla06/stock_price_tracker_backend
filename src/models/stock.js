const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    price: {
        type: String
    }
});

module.exports = mongoose.model('Stock', stockSchema, 'stockslist');