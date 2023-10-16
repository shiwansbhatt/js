// //filters
// const nums = [10,20,30,40,50,60,70,80,90,100]
// const newNums = nums.filter( (num) => num>50)
// const newNums2 = nums.filter( (num) => {return num<50})
// console.log(newNums);
// console.log(newNums2);

// //how it can be done using for each example
// const newNums3 = []
// nums.forEach((num) => {
//     if(num > 50){
//         newNums3.push(num)
//     }  
// })
// console.log(newNums3);


const myLanguages = [
    {
        language : "java",
        fileExtension : "java",
        version : 17
    },
    {
        language : "javascript",
        fileExtension : "js",
        version : 3
    },
    {
        language : "python",
        fileExtension : "py",
        version : 9
    }
 ]

 const userLanguages = myLanguages.filter((lang)=>lang.version>8 && lang.language==="java")
 console.log(userLanguages);