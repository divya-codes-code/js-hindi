//conditional statement

let age = 18;
if (age >= 18) {
    console.log("You can vote"); 
} 

let age2 = 18;
if (age2 <= 18) {
    console.log("You cannot vote"); 
} 

let age3 = 18;
let mode = "dark";
let color;

if (mode === "dark"){
    color = "black"; 
}

if (mode === "light"){
    color = "red"; 
}
console.log(color);

let age4 = 18;
if (age4 >= 18) {
    console.log("You can vote"); 
} else {
    console.log("you cannot vote");   
}

//odd or even 
//if-else statement

let num = 10;
if(num%2 === 0){
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

//syntax => rules
// else-if statement

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

if(Age<18){
    console.log("junior");
} else if (age >60) {
    console.log("senior");    
} else {
    console.log("middle");
    
}