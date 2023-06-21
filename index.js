var http = require('http');
const fetch = require("node-fetch");
console.log('Loading function');

exports.handler = async(event, context, callback) => {
    const response = await fetch('https://dummyjson.com/products');
    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData
}