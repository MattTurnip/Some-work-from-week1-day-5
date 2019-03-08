const people = [
    { "name": "george", "age": 45},
    { "name": "pat", "age": 3},
    { "name": "pete", "age": 23},
    { "name": "alyssa", "age": 35},
    { "name": "emma", "age": 67},
    { "name": "tessa", "age": 12},
    { "name": "matt", "age": 78},
    { "name": "cam", "age": 90}
];

//function to determine if people are over 35
function peopleOver35() {
    var newPeople = [];
    people.forEach(function(person){
        if (person.age > 35){
            // console.log(person.name, person.age);
            newPeople.push(person)
        }
    });
    return newPeople;
}

// console.log(peopleOver35());


//my test 

// if (peopleOver35().length == 4) {
//     console.log("yes that is correct");
// } else {
//     console.log("no someone changed the code");
// }

//module exporting- this object denotes what "chunk" of this file should be exported

module.exports = {
    peopleOver35: peopleOver35,
}