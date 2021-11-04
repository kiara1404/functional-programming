const data = require('./data.json');
const utilities = require('./modules/util.js')


function parseData() {
    return new Promise((resolve, reject) => {
        let dataSet = data;
        resolve(dataSet);
    })
}
parseData()
    .then(data => {

        return data.map(obj => {
            Object.keys(obj).forEach(key => {
                obj[key] = utilities.deleteUpperCase(obj[key])
                obj[key] = utilities.ifEmptyToZero(obj[key])
                obj[key] = utilities.capitalizeFirstLetter(obj[key])
            })
            return obj;
        })

    })
    .then(data => {
        return utilities.cleanHuisdier(data);

    })
    .then(cleanData => {
        console.log(cleanData)
    }).catch(err => {
        console.log(err);
    })