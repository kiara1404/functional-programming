// Nathan heeft mij geholpen met ht opdelen van mijn functies in module https://github.com/bommezijn/functional-programming/blob/main/index.js

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
// overgenomen van voorbeeld code van Robert https://github.com/cmda-tt/course-21-22/blob/main/fp/examples/chaining-cleaning/index.js
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

exports.deleteUpperCase = deleteUpperCase
exports.ifEmptyToZero = ifEmptyToZero
exports.capitalizeFirstLetter = capitalizeFirstLetter
exports.cleanHuisdier = cleanHuisdier
