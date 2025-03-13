const user = {
    username : "divya",
    price : 1999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
 
}

user.welcomeMessage()
username = "Muskan"
user.welcomeMessage()
console.log(this);

function one (){
   let username = "divya"
    console.log(this.username);
}

one()

const one = () => {
    let username = "divya"
    console.log(this);

}

one()

//basic arrow function
const addTwo = (num1, num2) => {
       return num1 + num2
}

console.log(addTwo(6,8));

//const addOne = (num1, num2) =>  (num1 + num2)
