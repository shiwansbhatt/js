//maps
const nums = [10,20,30,40,50,60,70,80,90,100]

// const newNums = nums.map((num)=>num*10)

//chaining concept
const newNums = nums
                    .map((num) => num * 10)
                    .map((num) => num+5)
                    .filter((num) => num > 500)

console.log(newNums)