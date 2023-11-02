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
	

- js is synchronous, single threaded(code runs one by one at a time)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


DOM Learning----------------                                      
						WINDOW
						   |
						   |
						DOCUMENT
						   |
						   |
						  HTML
						/     \	
					       /       \
					    HEAD      BODY
					  /    |	  \
					 /     |           \
				      TITLE   META         DIV->attribute
				     /	       |	   /   \ 
				    /	       |	  /     \
			       TEXT NODE   ATTRIBUTE	 h1      p
							 |	  \	
							 |         \
						     text node    text node

//getAttribute(), setAttribute()
//document.createElement
//getElementById()
//id.textContext --> gives the all text which is actually present there in response
//id.innerText -->gives the text which is only visible in response
//id.innerHTML -->gives also the html code inside if any with the actual code
//document.querySelector -->eg-(document.querySelector('h1')-->gives the first h1 tag in response
			      -(document.querySelector('#id')
			      -(document.querySelector('.class')
//document.querySelectorAll -->gives typeof nodeList in response and returns all specify tags or class or ids
//HTMLcollection to Array --> Array.from(<HTMLcollectioName>)
//setInterval() --> takes a function and time in argument (had used to make Clock)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
HTML events->

//type
//timestamp
//preventDefault

//these two will happen when we pass third argument in event listener bydefault it is false event capturing happens when we pass true in third argument
//event bubbling -> first inner than outer

//event capturing -> first outer than inner 
//if we don't want bubbling then we can use <e.stopPropagation()> function

//asynchronous code - 
