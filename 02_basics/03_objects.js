//singleton
//object.create
//object literals

const mySym = Symbol("key1")
const jsuser={
    name: "Divya",
    "full name" : "Divya kumari",
    [mySym]: "mykey1",
    age: 20,
    location: "jaipur",
    email: "kumaridivya13756@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mySym])

jsuser.email = "divya@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email = "divya@.com"

console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello JS user")
}

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());