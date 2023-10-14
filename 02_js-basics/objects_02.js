//singleton
const user = new Object()

user.id = "123qwe"
user.name = "sam"
user.isLoggedIn = false

console.log(user)

const regularUser = {
    email : "regular@gmail.com",
    fullName : {
        userName:{
            firstName : "shiwans",
            lastName : "bhatt"
        }
    }
}

console.log(regularUser.fullName.userName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {...obj1,...obj2} //spread operator
const obj4 = Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4)


const users = [
    {
        id :1,
        name :"sam"
    },
    {
        id :2,
        name :"raj"
    },
    {
        id :3,
        name :"nic"
    }
]

console.log(users[1].name)

console.log(Object.keys(user))
console.log(Object.values(user))

console.log(user.hasOwnProperty('name'))