function checkAge(name: string, age: number): void {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}



interface checkAgePeople {
    name: string,
    age: number
}

let people: Array<checkAgePeople> = [
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
    const element = people[i];
    checkAge(element.name, element.age);
}



let thisGuy: string[] = ["thisGuy1", "thisGuy2", "thisGuy3", "thisGuy4", "thisGuy5", "thisGuy6"]

for(let i = 0; i < thisGuy.length; i++) {
   const element = thisGuy[i];
   console.log(element);
};






function getLength(word: string): void {
    word.length % 2 === 0 ? console.log("Toilet bowl") : console.log("Toilet bowl");
}
getLength("Hello World")