const arr = [0,1,2,3,4,5] 
//js arrays are resizable
// console.log(arr[0]);
//js arrays copy operations create shallow copies(shallow copy of an object is a copy whose properties share the same references)

//array methods
arr.push(6)
//unshift,shift
//includes
//indexOf
// console.log(arr.indexOf(3))
//slice,splice

const mySlicedArr = arr.slice(1,3)
console.log(mySlicedArr)
console.log(arr)

const mySplicedArr = arr.splice(1,3)
console.log(mySplicedArr)
console.log(arr)

// slice vs splice ---  slice takes out the required index elements from array without changing actual array
//                      splice takes out the required index elements from array but changes actual array


indian_cricketers = ["dhoni" , "kohli" , "rohit"]
australian_cricketers = ["warner" , "smith" , "starc"]

//concat
all_concated_cricketers = indian_cricketers.concat(australian_cricketers)
console.log(all_concated_cricketers)


//spread operator
all_cricketers = [...indian_cricketers, ...australian_cricketers]
console.log(all_cricketers)