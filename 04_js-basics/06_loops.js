//reduce

const nums = [10,20,30,40,50]
//accumulator--empty value
const initial_value = 0
const sum = nums.reduce((acc,currValue)=> acc+currValue,0)
console.log(sum);

