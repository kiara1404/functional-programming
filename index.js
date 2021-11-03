const fetch = require('cross-fetch')
let endpoint = 'https://dataderden.cbs.nl/ODataApi/OData/50080NED'
//const selectedColumn = 
endpoint = 'https://dataderden.cbs.nl/ODataApi/OData/50080NED/UntypedDataSet'
//endpoint = 'https://dataderden.cbs.nl/ODataApi/OData/50080NED/Persoonskenmerken'
async function getData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data;
}

console.log(getData(endpoint).then(response => {
  return console.log(response)
}))

//import fetch from 'node-fetch';
