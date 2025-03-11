//variables 
console.log("divya")
var myAge = 20
console.log(myAge)

var my_firstName = "divya";
var _myLastName$ = "dk";
var myAge123 = 25; 
var $cityName = "Bettiah";
var myEmail = "dk@gmail.com"; 

console.table([my_firstName, _myLastName$, myAge123, $cityName, myEmail]);

 //DATA TYPES- data type define the types of value that a variable can hold
//Interview Questions – Data Types

//1: What is the difference between null and undefined in JavaScript?
//2: What is the purpose of typeof operator in JavaScript?
//3: What is the result of 'typeof null' in JavaScript?
//4: What are primitive data types in JavaScript?
//5: Explain the concept of truthy and falsy values in JavaScript. Provide examples?

var myString = "Hello, World!";
var myNumber = 25;
var myFloat = 3.14;
var myBigInt = 9007199254740991n;
var myBoolean = true;

var myUndefined;
var myNull = null;
var mySymbol = Symbol("unique");

console.log("String:", myString);
console.log("Number:", myNumber, myFloat);
console.log("BigInt:", myBigInt);
console.log("Boolean:", myBoolean);
console.log("Undefined:", myUndefined);
console.log("Null:", myNull);
console.log("Symbol:", mySymbol);

console.table({
    myString: typeof myString,
    myNumber: typeof myNumber,
    myFloat: typeof myFloat,
    myBigInt: typeof myBigInt,
    myBoolean: typeof myBoolean,
    myUndefined: typeof myUndefined,
    myNull: typeof myNull,
    mySymbol: typeof mySymbol
  });

let num1 = 123;
let str1 = num1.toString(); 
console.log(str1, typeof str1);


// 6: conversion 

//Number → String
let num2 = 123;
console.log(num2.toString()); //using .tostring
console.log(String(num2));    // using string()
console.log(num2 + "");  //using literals

//String → Number
let str = "456";
console.log(Number(str));    // 
console.log(parseInt(str));   // (for integers)
console.log(parseFloat(str)); //  (for decimals)
console.log(+str); //unary (+) operators

//truthy and falsy 

let user = "divya";
if (user) {
    console.log("User is logged in");
} else {
    console.log("No user found");
}