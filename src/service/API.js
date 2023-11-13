const axios = require("axios");
const Stocks = require("../models/stock");
const { GLOBAL_QUOTE_URL } = require("../constant");
const db_data = require('../db/stockslist.json');
const API_KEY = process.env.API_KEY;

exports.getQuotes = (symbol) => {
  try {
    const url = GLOBAL_QUOTE_URL.replace(
      "{COMPANY_SYMBOL}",
      `${symbol}.BSE`
    ).replace("{API_KEY}", API_KEY);
    return axios.get(url);
  } catch (error) {
    return {
      msg: "Something went wrong",
      error: error,
    };
  }
};

exports.getStocksFromDB = () => {
  try {
    // return Stocks.find().select({ _id: 0, __v: 0 });
    return db_data;
  } catch (error) {
    return {
      msg: "Something went wrong",
      error: error,
    };
  }
};

exports.generateRandomPrice = (low, high) => {
  try {
    return parseFloat((Math.random() * (high - low + 1)).toFixed(4)) + parseFloat(low);
  } catch (error) {
    return {
      msg: "Something went wrong",
      error: error,
    };
  }
};
