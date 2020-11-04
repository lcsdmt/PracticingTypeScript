function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
let people = [
    {
        name: "Bagel",
        age: 87
    },
    {
        name: "Tart",
        age: 22
    },
    {
        name: "AnotherPaerson",
        age: 2
    },
    {
        name: "Him",
        age: 48
    }
];
for (let i = 0; i < people.length; i++) {
    let element = people[i];
    checkAge(element.name, element.age);
}
let theseGuys = ["thisGuy1", "thisGuy2", "thisGuy3", "thisGuy4", "thisGuy5", "thisGuy6"];
for (let i = 0; i < theseGuys.length; i++) {
    let element = theseGuys[i];
    console.log(element);
}
;
function getLength(word) {
    word.length % 2 === 0 ? console.log("Toilet bowl") : console.log("Toilet bowl");
}
getLength("Hello World");