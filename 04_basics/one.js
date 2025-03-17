// Conditional statement
let age = 18;
if (age >= 18) {
    console.log("You can vote"); 
} 

let age2 = 17;
if (age2 < 18) {
    console.log("You cannot vote"); 
}

let age3 = 18;
let mode = "dark";
let color = "white"; // Default color

if (mode === "dark") {
    color = "black"; 
} else if (mode === "light") {
    color = "red"; 
}
console.log(color);

let age4 = 18;
if (age4 >= 18) {
    console.log("You can vote"); 
} else {
    console.log("You cannot vote");   
}

// Odd or Even
let num = 10;
if (num % 2 === 0) {
    console.log("even");   
} else {
    console.log("odd");   
}

let num2 = 5;
if (num2 % 2 === 0) { 
    console.log("even");   
} else {
    console.log("odd");
}

// Else-if statement
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

let Age = 45;

if (Age < 18) {
    console.log("Junior");
} else if (Age > 60) { // Fixed variable name
    console.log("Senior");    
} else {
    console.log("Middle");
}

// Ternary Operator
let age5 = 25;
let result = age5 >= 18 ? "adult" : "not adult"; 
console.log(result); 

let age6 = 60;
age6 >= 18 ? console.log("adult") : console.log ("not adult"); 

let age7 = 16;
console.log(age7 >= 18 ? "adult" : "not adult"); // Fixed unused expression

// Grade System
let marks2 = 5;
if (marks2 >= 80) {
    console.log("Grade: A");
} else if (marks2 >= 70) {
    console.log("Grade: B");  
} else if (marks2 >= 60) {
    console.log("Grade: C");
} else if (marks2 >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
