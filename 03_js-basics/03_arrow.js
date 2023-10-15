const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4))

//implicit return
// const add = (num1, num2) => num1+num2
const add = (num1, num2) => (num1+num2)
const myDetails = () => ({username:"shiwans"})  //when returning object it should must be wrapped inside <()> brackets
console.log(myDetails())