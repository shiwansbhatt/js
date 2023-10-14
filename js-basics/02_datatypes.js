"use strict";     //treat allJS code as newer version

// alert("hello")  // suitable in browser not in node

let name ="shiwans"
let age = 24
let isLoggedIn = false
let state = null
let user;

//number,bigInt,string,boolean,null(standalone value||empty value),undefined(no value assigned),symbol(unique)----------primitive
// console.log(typeof user)


const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1)
console.log(id2)
console.log(id1 === id2)



//Arrays,objects,functions

const cricketers = ["kohli","raina","yuvi"]

let myDetails = {
    name : "shiwans",
    age : 24
}

const myDemoFunction = function(){
    console.log("hello world")
}
myDemoFunction()


