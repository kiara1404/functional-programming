const data = require('./data.json');

let alleData = data;

// Loop over alle data en pak ieder individueel object.
alleData.forEach(singleData => {
    console.log('NIEUW OBJECT');

    // Definieer de nieuwe key, maar geef er nog geen variable aan
    let new_key;

    // Voor iedere key in het object, loop als een array
    Object.keys(singleData).forEach(singleQuestion => {
        // singleQuestion is een array met alle object "keys"

        // Afhankelijk van de key (singleQuestion, doe iets per verschillende vraag)
        switch (singleQuestion) {
            case 'Wat is je oogkleur?':
                new_key = 'oogkleur';
                break;
            case 'Wat is je favoriete soort huisdier?':
                new_key = 'huisdier';
                break;
            case 'Wat is je favoriete windrichting?':
                new_key = 'windrichting';
                break;
            case 'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
                new_key = 'zinInTechTrack';
                break;
            case 'Kies zelf of je deze vraag beantwoord.':
                new_key = 'kiesAntwoord';
                break;
            case 'Wat is je favoriete datum?':
                new_key = 'datum';
                break;
            case 'Wat is je favoriete datum, maar nu in tekst!':
                new_key = 'datumTekst';
                break;
            case 'Wat is je favoriete zuivelproduct?':
                new_key = 'zuivelproduct';
                break;
            case 'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
                new_key = 'kleurKledingstukken';
                break;
            case 'Op welke verdieping van het TTH studeer je het liefst?':
                new_key = 'verdieping';
                break;
            case 'Wat wil je worden als je groot bent?':
                new_key = 'laterGroot';
                break;
            case 'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
                new_key = 'laterGroot8';
                break;
            case 'Kaas is ook een zoogdier?':
                new_key = 'kaasZoogdier';
                break;
            case 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
                new_key = 'automerk';
                break;
            default:
                // Als ie niet bestaat, maak 'm dan undefined
                new_key = undefined;
                break;
        }
        if (new_key) {
            Object.defineProperty(
                singleData,
                new_key,
                Object.getOwnPropertyDescriptor(singleData, singleQuestion)
            );
            delete singleData[singleQuestion];
        }
    });
    console.log(singleData);
});

// wilde deze in een functie zetten
let toLowerCase = data.map(answers => answers.huisdier.toLowerCase());


// alles naar lowercase
function deleteUpperCase(string) {
    let newString = string.toLowerCase();
    return newString;
}

// -- begin for loop --
for (let i = 0; i < data.length; i++) {
    data[i].huisdier = deleteUpperCase(data[i].huisdier);
}

//console.log('VANAF HIER');
//console.log(data);

//nieuwe lege array om opgeschoonde data in te stoppen
let huisdierData = [];

function cleanHuisdier() {
    toLowerCase.forEach(newData => {
        if (newData.includes('dachshund')) {
            newData = 'hond';
            huisdierData.push(newData);
        } else if (newData.includes('capricornis sumatraensis')) {
            newData = 'geit';
            huisdierData.push(newData);
        } else if (newData.includes('of')) {
            newData = 'hamster';
            huisdierData.push(newData);
        } else {
            huisdierData.push(newData);
        }

    });
}
cleanHuisdier();

function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.substring(1);

}

for (let i = 0; i < data.length; i++) {
    huisdierData[i] = capitalizeFirstLetter(huisdierData[i])

}

console.log(huisdierData)