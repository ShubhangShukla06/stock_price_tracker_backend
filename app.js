require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const { getQuoteBySym, getAllStock, getRandomPrice } = require('./src/controller/controller');
// const { dbConnection } = require('./src/db/connection');

const PORT = process.env.PORT || 8000;

app.use(cors());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// dbConnection();

/**
 * Example: http://localhost:5000/api/bse/get_quote?symbol=ACC
 */
app.get('/api/bse/get_quote', getQuoteBySym);

/**
 * Example: http://localhost:5000/api/bse/get_list_of_stocks
 */
app.get('/api/bse/get_list_of_stocks', getAllStock);

/**
 * Example: http://localhost:5000/api/bse/get_random_price?low=450.765.2398&high=567.4357
 */
app.get('/api/bse/get_random_price', getRandomPrice);