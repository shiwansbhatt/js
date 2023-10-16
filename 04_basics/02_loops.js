//array specific loops
//-----------------for of loop--------------------
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr){
    console.log(i);
}
const greetings = "Hello world"
for (const greet of greetings){
    // console.log(greet);
}
//maps
const map = new Map()
map.set('IN',"INDIA")
map.set('AUS',"AUSTRALIA")
map.set('FR',"FRANCE")
//  console.log(map)

 for(const key of map){
    console.log(key);
 }
 for(const [key,value] of map){
    console.log(key+ ':-' + value);
 }
 //object --objects are not iterable using this
//  const countries = {
//     'IN':"INDIA",
//     'AUS':"AUSTRALIA",
//     'FR':"FRANCE"
// }
// for(const obj of countries){
//     console.log(obj)
// }

//for object
//-------------for in loop--------------------
const countries = {
    'IN':"INDIA",
    'AUS':"AUSTRALIA",
    'FR':"FRANCE"
}
for(const key in countries){
    console.log(key)
    console.log(countries[key])
}

const arr2 = [10,20,30,40,50]
for (const key in arr2){
    console.log(key);
    console.log(arr2[key]);
}

//<for of> loops cannot be used to iterate in an object, for objects <for in> loop is used
//<for in> loops cannot be used to iterate in map, for maps <for of> loop is used