/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
console.log(1);
var voornaam = "jan";
var achternaam = "peterson";
var email = "janpeterson@gmail.com";
var bericht = "dingen";
var IDE = "intellij";

var telefoonnummer = 3442786876;
var huisnummer = 9387429847;
var fax = 43544353543;
var tijd = 1140;
var leerlingnummer = 3432423;

var opschool = true;
var mbo = false;
var hbo = true;
var rijbewijs = false;
var trein = true;

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */
console.log(2);
var students = ['jan', 'henk', 'sjaak'];
var niveau = ['mbo', 'hbo', 'master'];
var opleiding = ['mediadevelopper', 'gamedeveloper', 'interactief vormgever'];

console.log(students.length + "\n" + niveau.length + "\n" + opleiding.length)
/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
console.log(3);
var leeg = [];
leeg.push('nu niet meer');
/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
console.log(4);
var students2 = ['jan', 'henk', 'sjaak'];
students2.splice(0,1);
students2.splice(1,1);
console.log(students2);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */
console.log(5);
var stoel = {'wielen':1, 'armleuningen':0};
var tafel = {'groote':'groot', 'hoogte':'middel'};
var telefoon = {'merk':'oneplus', 'model':'oneplus one'};
var muis = {'merk':'rat', 'modelnr':5};
var laptop = {'merk':'dell', 'schermgrootte':15};
var hdd = {'merk':'toshiba', 'grootte':1000};
var koptelefoon = {'bluetooth':1};
var id = {'voornaam':'indy', 'achternaam':'koning'};
var bankpas = {'geld':1000, 'eigenaar':'indy'};
var portemonee = {'geld':100, 'pasruimte':10};


/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */
console.log(6);
function multiply(n1, n2) {
    return n1*n2;
}
function subtract(n1, n2) {
    return n1-n2;
}
function add(n1,n2) {
    return n1+n2;
}
function divide(n1,n2) {
    return n1,n2;
}
console.log(multiply(6,5));
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */
console.log(7);
function newPerson(firstName, lastName) {
    var person = {'firstName':firstName, 'lastName':lastName};
    return person;
}
console.log(newPerson('henk', 'jan'));
/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */
console.log(8);
var student = {'showName':function(){
return this.firstname;
},
'firstname':'henk',
    'lastname':'jan'
};
console.log(student.showName());
/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */
console.log(9);
var student = {'firstname':'sjaak'};
student.showName = function () {
    return this.firstname;
};
console.log(student.showName());
/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */
console.log(10);
var students = ['henk', 'jan', 'sjaak', 'feek', 'sjonny', 'anita', 'boef', 'henk', 'fred', 'willem'];
students.forEach((value)=>{console.log(value);});