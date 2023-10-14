

//object literals
const mySymbol = Symbol("key1")

const jsUser = {
    name:"shiwans",
    age:24,
    [mySymbol]:"myKey",
    location:"dehradun",
    email:"shiwans@gmail.com",
    isLoggedIn:false
}
console.log(jsUser["email"])

console.log(jsUser["age"])
console.log(jsUser[mySymbol])

// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("hello user")
}
jsUser.greetingTwo = function(){
    console.log(`hello user ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())