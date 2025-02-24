//primitive datatype(call by value)

// 7 types:string, Null, undefined,number,boolean,bigint,symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(score);
console.log(id == anotherId);

const bigNumber = 234753n


// non primitive datatype(refrence type)
//Array ,objects,functions

const heros = ["Shaktiman", "naagraj"];

{
    name: "divya",
    age = 20
}

const myFunction = function(){
    console.log("hello guy's");
    
}

console.log(typeof bigNumbe)
console.log(typeof outsideTemp)

