// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "Divya"
tinderUser.isLoggedIn = false

//console.log(tinderUser)  

//obkect inside object

const regularUser = {
    email: "divyakumari@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Divya",
            lastname: "singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = {obj1 , obj2}
//const obj3= Object.assign(obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email: "divya@gmail.com"
    },
    {
        id:1,
        email: "divya@gmail.com"
    },
    {
        id:1,
        email: "divya@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//course.courseInstructor

const{courseInstructor} = course

console.log(courseInstructor);

const{courseInstructor: Instructor} = course
console.log(Instructor);

//react
//const navbar = ({company}) => {}

//navbar(company = "hitesh")

//{
    //"name": "divya",
    //"courseName": "Js in Hindi",
   // "price": "free"
//}

[
    {},
    {},
    {}
]
