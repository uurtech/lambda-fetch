var http = require('http');
const axios = require("axios");

async function Api() {
  const response = await axios.get("https://dummyjson.com/products",{
  headers : {
    "Content-Type" : "application/json"
  }
  })
  
  //receive data from request
  console.log(response.data);
  return response.data;
}

exports.handler = async (event, context, callback) => {
    Api()
    return "done"
}