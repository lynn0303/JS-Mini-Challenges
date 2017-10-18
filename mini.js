// assignment 1;

var glofish1 = 2;
var bettafish2 = 100;
var result = glofish1 + bettafish2;

console.log(result);


var school = {
  college: "Mercy",
  business: "New York Code and Design",
  end:      "Nov 13th",
  studying: ["UI/UX Design", "Web Developer"]
};

console.log(school);
console.log(school.college);
console.log(school.business);
console.log(school.end);
console.log(school.studying[0]);
console.log(school.studying[1]);


//assignment 2;

var cars = [
    ["BMW", 2400,"sporty"],
    ["Lexus",7600,"luxury"],
    ["Honda",1000,"compact"]
]

console.log(cars[0][0] + "</br>");
console.log(cars[1][2] + "</br>");

//assignment 3;

var lynnNumber = 100;

if (lynnNumber < 100) {
  console.log("Your number is less than 100!");
  alert("Your number is less than 100!");
} else if (lynnNumber > 100) {
  console.log("Your number is greater than 100!");
  alert("your number is greater than 100");
} else {
  alert("invalid input");
}

//assignment 4;

function enter(firstName) {
  return alert("Hola " + firstName);
}

enter("Lynnette");
enter("Java Script is Challenging");

function printSomething() {
  return console.log("Coding");
}

printSomething();

//assignment 5;

function Game(doorNumber) {
  if (doorNumber === 1) {
    return alert("you win $100,000");
  } else if (doorNumber === 2) {
    return alert("you win a brand new house");
  } else if (doorNumber === 3) {
    return alert("You win a penny");
  } else {
    return alert("that's not a valid door");
  }
}

Game(2);
Game(3);
Game("computer");
