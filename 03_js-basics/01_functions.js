// function demoFunction(){
//     console.log("hello I am shiwans")
// }

// demoFunction()

// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }

// result = addTwoNumbers(3,4)
// console.log(result)

function loginUserMessage(username = "demo"){
    if(!username)
        return "please enter  a username"
    return `${username} logged in`
}

console.log(loginUserMessage())