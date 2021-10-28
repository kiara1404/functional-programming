const data = require('./data.json');
const removeWhitespace = require('remove-whitespace');

// console.log(data[1]['Wat is je favoriete soort huisdier?']);

let alleData = data;

// let lowerCaseData = removeWhitespace(onderwerpNaam);
// // console.log(lowerCaseData);
// let huisDierenData = lowerCaseData.replace(lowerCaseData, 'favoHuisdier');
// // console.log(huisDierenData)

// loopen over de data
// de vraag eruit halen
// de vraag vervangen met camelcase naam
//de dataset moet terug komen met vervangende naam

// --- Cleanen van de vragen ---

// Loop over alle data en pak ieder individueel object.
alleData.forEach(singleData => {
  //console.log('NIEUW OBJECT');

  let new_key;

  Object.keys(singleData).forEach(singleQuestion => {
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
  //console.log(singleData);
});
// --- Einde cleanen van de vragen ---

// --- Cleanen antwoorden ---
let onderwerpNaam = 'huisdier';
let toLowerCase = data.map(answers => answers[onderwerpNaam].toLowerCase());
console.log(toLowerCase);
console.log(toLowerCase.length);

// proberen .toLowerCase in functie te zetten maar deze werkt maar voor 1 value en niet voor allen in de kolom

function deleteUpperCase(string) {
  let newString = string.toLowerCase();
  return newString;
}

let result1 = deleteUpperCase(data[0]['huisdier']);
//console.log(result1);
function cleanHuisdier() {
  let huisdierData = [];
  toLowerCase.forEach(newData => {
    if (newData.includes('dachshund')) {
      newData = 'hond';
      huisdierData.push(newData);
    }
    if (newData.includes('capricornis sumatraensis')) {
      newData = 'geit';
      huisdierData.push(newData);
    }
    if (newData.includes('hamster')) {
      newData = 'hamster';
      huisdierData.push(newData);
    } else {
      huisdierData.push(newData);
    }
  });

  console.log(huisdierData);
  console.log(huisdierData.length);
}
cleanHuisdier();
