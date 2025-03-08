function nice(name) {
    console.log("Hey " + name + ", you are nice!");
    console.log("Hey " + name + ", you are good!");
    console.log("Hey " + name + ", your shirt is nice!");
    console.log("Hey " + name + ", you are a nice girl!");
}

nice("Muskan")

console.log("Hey Divya you are nice!");
console.log("Hey Divya you are good!");
console.log("Hey Divya your shirt is nice!");
console.log("Hey Divya you are nice girl!");


function sum(a,b,c=3){
    //console.log(a+b)
    return a + b + c
}

result1 = sum(2,5)
result2 = sum(7,3)
result3 = sum(1,5)

console.log("the sum of these number is: " , result1);
console.log("the sum of these number is: " , result2);
console.log("the sum of these number is: " , result3);

const func1 =(a)=>{
    console.log("I am an arrow function", a);
    

}
func1(34)
func1(49)
func1(64)


function sayMyname() {
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
    console.log("A");
}
sayMyname()

function addTwoNumbers(a,b){
    return a+b
}

const result = addTwoNumbers(45,76)

function loginUserMessage(username) {
    if(username=== undefined){
    console.log("please enter a username");
    return
    
    }
    return `$ {username} just logged in `
}

console.log(loginUserMessage("Muskan"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

function calculateCartPrice(...num11){
return
}

console.log(calculateCartPrice(200,400,500))

const user ={
    username: "Divya",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({
    username: "muskan",
    price :499
})

const newArray = [200,400,800]
function returnSecondValue(getarray){
return getarray[0]
}
console.log(returnSecondValue(newArray));
