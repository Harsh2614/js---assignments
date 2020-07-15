//Console.log - Used to log(print) the output to the console & can take any type of data
console.log('My Name Is Harsh Saxena'); 
console.log(1);  
console.log(undefined);

//Console.error - Used to log error message to the console which can be useful in testing of code
console.error('This is a simple error');

//Console.warn - Used to log warning message to the console
console.warn('This is a warning.');

//Console.table - Used to generate a table inside a console & the input must be an array or an object
var a = {name:"Harsh", age:"20", city:"India"}
var b = {name:"Rohit", age:"31", city:"India"}
var c = {name:"Dhoni", age:"39", city:"India"}
console.table({a ,b ,c})

//Console.time & Console.timeEnd - Used to know the amount of time spend by a block or a function but with same label
console.time('Time taken');
console.log("It Is Running")
console.log('%c Custom Message','color:red;')
console.timeEnd('Time taken');

//Console.count - Used to count the instances of a loop & print each of them
for(let i=1;i<10;i++)
{ 
    console.count(i);
} 

//Console.group - Used to allows us to group contents in a separate block, which will be indented
console.group('Started To Group'); 
  console.warn('Warning!'); 
  console.error('Error Msg'); 
  console.log('This Is Inside Group'); 
console.groupEnd('Group Has Finished'); 
console.log('This Is Seperate Msg Outside Group');

//Console.info - Used to print the information on a console
console.info("This Is A Information");

//Console.clear - Used to clear the console
//console.clear()

