
export function logbonus() {
    export let array = ['a', 'b', 'c', 'd'];
    console.log('bonus 1 \n dit is handig voor frameworks toevoegen in de js zelf en je kan je eigen bestanded verdelen waardoor het oerzictelijker word')
    console.log('bonus 2');
    console.log(array);
    array.sort();
    console.log(array);
    //Array.sort is handig als je iets wilt sorteren
    array.forEach(function (value) {
       console.log(value);
    });
    //Array.sort gebruik je als je iets uit moet voeren op alle waardes/keys in een array
    console.log(array.filter(function (value) {
        return value == 'c';
    }));
    //array.filter geeft een array terug die voldoet aan de eisen die je in een functie kan stellen
    array.map(function (val) {
        return val+"e";
    });
    //array.map is als je functies uit wilt voeren over de items in een array
    function executeFunction(func) {
        return func.call();
    }

    function getFunc() {
        return function () {
            return 6*5;
        }
    }
    function test(func) {
        return executeFunction(func);
    }
//functies returnen uit een functie of functies opvragen

    let add = (function () {
        let counter = 0;
        return function () {return counter += 1;}
    })();
    let subtract = (function () {
        let counter = 0;
        return function () {return counter -= 1;}
    })();

    let divide = (function () {
        let counter = 0;
        return function () {return counter = counter/2;}
    })();




}

