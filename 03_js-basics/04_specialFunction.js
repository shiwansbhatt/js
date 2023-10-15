//Immediately Invoked Function Expression (IIFE)

(function DBConnection(){
    console.log("DB Connected")
})();

((dbName)=>{
    console.log(`DB Connected To ${dbName}` ) //with different syntax and passed parameter in it
})("postgres");
//(first Paranthesis)->for function definition
//(second paranthesis)->for execution call

//specially used for removing global scope variables pollution
//the function must be stopped using ;