const {
    getQuotes,
    getStocksFromDB,
    generateRandomPrice
} = require('../service/API');

exports.getQuoteBySym = async (req, res) => {
    const { symbol } = req.query;
    const result = await getQuotes(symbol);
    res.json(result.data);
}

exports.getAllStock = async (req, res) => {
    const listOfStocks = await getStocksFromDB();
    res.json({
        msg: 'Success',
        data: listOfStocks
    });
}

exports.getRandomPrice = async (req, res) => {
    const { low, high } = req.query;
    const randomPrice = await generateRandomPrice(low, high);
    res.json({
        msg: 'Success',
        data: randomPrice
    });
}