JS----
//var in js has problem of scope so let,const is used for variable declaration

https://tc39.es/ecma262/#sec-intro4e-----official documentation for js
mdn ---documentation for js

type of undefined --->undefined
type of null ---->object

primitive_type (string,int,boolean,null,undefined,bigInt,symbol)
reference_type (array,objects,functions)

memories-->stack(primitive datatype),heap(reference datatype)

JS arrays are resizable and can have different data type elements
js array copy operations create shallow copies(shallow copy of an object is a copy whose properties share the same references)


JS Execution context-
	every environment have different execution context like browsers have different EC, node environment have different
	for browser execution context is window object 
Global Execution Context

Functional Execution Context

EVAL Execution Context



JS code runs in two phases-1.memory creation phase
			   2.execution phase
	Step 1 - global execution allocated inside this	
	Step 2 - memory phase (all variables and functions are just taken and variables are assigned with undefined and function is with definition)
	Step 3 - execution phase all variables are assigned with values and function executed and it will get deleted after its work is completed.
		 note - (everytime new function will execute these memory phase and execution phase are repeated)
	

- js is single threaded
