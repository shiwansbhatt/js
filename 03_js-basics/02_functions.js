//rest operator

function calculatePrice(...num){
    return num
}
console.log(calculatePrice(100,200,300))

function calculatePrice(val1, val2, ...num){
    return num
}
console.log(calculatePrice(100,200,300,400))


const jsUser = {
    name:"shiwans",
    age:24,
    location:"dehradun",
    email:"shiwans@gmail.com",
    isLoggedIn:false
}
function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`)
}
handleObject(jsUser)