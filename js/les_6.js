import * as Conditions from "./utils/conditions.utils";

let obj = {};
console.log(Conditions.existy(obj));

/**
 * Opdracht 1: imports
 * Importeer conditions.utils.js
 *
 * Maak een object aan en check via existy() of hij bestaat
 * Maak een variabele aan maar geef hem nog geen vulling. Console.log() wat existy() teruggeeft
 */

/**
 * Opdracht 2: exports
 *
 * Maak een eigen util bestand aan met een functie die je handig lijkt om te hebben
 * Je kan aan iets simpels denken als je multiply functie
 * Maar misschien weet je iets anders te bedenken. Bijvoorbeeld een functie die je helpt
 * met random getallen. getRandom(from, to)
 * importeer je bestand hier en voer je functie uit
 */
import * as RandomUtils from "./utils/random.utils";
console.log(RandomUtils.giveRandom(100, 200));
/**
 * Opdracht 3: Analyseer de Student Class
 *
 * Importeer de Class en maak 3 studenten aan
 * Beantwoord de volgende vragen
 */

import Student from "./entities/student";
let studenten = [];
studenten[0] = new Student('jan', 'freeksma', 18);
studenten[1] = new Student('peter', 'freeksma', 18);
studenten[2] = new Student('sdfsdfs', 'freeksma', 18);
studenten[2].age = 89;
console.log(studenten);

console.log('Wat is de prototype chain van een student?',
            'jouw antwoord: de functies in de class-object prototype');

console.log('Kan je na het aanmaken van een student nog bij zijn leeftijd?',
            'jouw antwoord: ja');


/**
 * Opdracht 4: Student Class
 *
 * Console.log() de fullNames van je 3 aangemaakte studenten
 */
for (let i = 0; i<studenten.length; i++){
    console.log(studenten[i].getFullName());
}
/**
 * Opdracht 5: Custom class
 *
 * Roep mij erbij als je langer dan 5 a 10 minuten over deze opdracht na moet denken
 * Dan help ik even
 *
 * Maak een eigen Classroom class met de volgende functionaliteiten:
 * addStudent() sla de student op in een array
 * getStudent() studenten kunnen ophalen
 * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
 * Mocht je meer methods weten: voeg deze zeker toe
 * maak een aantal classrooms aan
 */
import Classroom from "./entities/classroom";
let classrooms = [];
classrooms.push(new Classroom("klas1"), new Classroom("klas2"),new Classroom("klas3"));
classrooms[0].addStudent("jan", "peterson", 15);
classrooms[0].addStudent("peter", "peterson", 25);
classrooms[0].addStudent("jan", "freel", 19);



classrooms[1].addStudent("sadsa", "pasdsda", 15);
classrooms[1].addStudent("petasdsaer", "petsdasn", 25);
classrooms[1].addStudent("jasdasan", "freasdasdl", 19);
console.log(classrooms[0]);
for (let i = 0; i<classrooms.length; i++){
    console.log("--------------");
    console.log(classrooms[i].classroomName);
    for (let j = 0; j<classrooms[i].getAllStudents().length; j++){
        console.log(classrooms[i].getStudent(j));
    }
    console.log("--------------");
}
/**
 * Opdracht 6: Custom class
 *
 * Maak een eigen School class met de volgende functionaliteiten:
 * addClassRoom()
 */

import School from "./entities/School";
let school = new School();
school.addClassRoom('class1');
school.getClassRoomByName('class1').addStudent("henk", "jan", 15);
school.getClassRoomByName('class1').addStudent("freek", "klaas", 18);
console.log(school.getClassRoomByName('class1'));
