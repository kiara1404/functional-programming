const data = require('./data.json');

function parseData() {
    return new Promise((resolve, reject) => {
        let dataSet = data;
        resolve(dataSet);
    })
}

// alles naar lowercase
function deleteUpperCase(string) {
    if (typeof string === 'string') {
        return string.toLowerCase();

    }
    else {
        return string
    }
}
// wanneer er een vraagteken in het antwoord voorkomt
function ifEmptyToZero(string) {
    if (typeof string === 'string') {
        return string.replaceAll('?', '')
    }
    else {
        return string
    }
}
//Eerste letter van het antwoord wordt een hoofldetter
function capitalizeFirstLetter(string) {
    if (typeof string === 'string') {

        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    else {
        return string
    }
}


function cleanHuisdier(data) {
    data.forEach(obj => {
        if (obj['Wat is je favoriete soort huisdier?'].includes('Dachshund')) {
            obj['Wat is je favoriete soort huisdier?'] = 'Hond'

        } else if (obj['Wat is je favoriete soort huisdier?'].includes('Capricornis sumatraensis')) {
            obj['Wat is je favoriete soort huisdier?'] = 'Geit'

        } else if (obj['Wat is je favoriete soort huisdier?'].includes('of')) {
            obj['Wat is je favoriete soort huisdier?'] = 'Hamster';
        }


    })

    return data
}

parseData()
    .then(data => {

        return data.map(obj => {
            Object.keys(obj).forEach(key => {
                obj[key] = deleteUpperCase(obj[key])
                obj[key] = ifEmptyToZero(obj[key])
                obj[key] = capitalizeFirstLetter(obj[key])
            })
            return obj;
        })

    })
    .then(data => {
        return cleanHuisdier(data);

    })
    .then(cleanData => {
        console.log(cleanData)
    }).catch(err => {
        console.log(err);
    })