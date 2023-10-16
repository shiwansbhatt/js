//------------------for each loop----------------------
const coding = ["js","c","c++","ruby","swift"]
 coding.forEach(element => {
    // console.log(element);
 });
//  function printMe(item){
//     console.log(item);
//  }
//  coding.forEach(printMe)
coding.forEach((element,index,arr) => {
    // console.log(element);
    // console.log(index);
    // console.log(arr);
 });

 const myLanguages = [
    {
        language : "java",
        fileExtension : "java"
    },
    {
        language : "javascript",
        fileExtension : "js"
    },
    {
        language : "python",
        fileExtension : "py"
    }
 ]
 myLanguages.forEach((item) =>{
    console.log(item.fileExtension)
    console.log(item.language)
 })