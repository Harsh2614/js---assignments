//The Scope Of Var Declarations Are Global 
//Var Declarations Can Be Updated And Re-Declared Within Its Scope
var name = "Harsh"; 
var age = 20;
var canFly = false;
var canCode = true;
var languages = ['C','Web Dev','Python','Java'];
var friends = {
    name:"Coding",
    hobby:"Learning",
}

var a = 10;
console.log(a);

var a = null;
console.log(a);


//The Scope Of Let Declarations Are Local
//Let Declarations Can Be Updated But Not Re-Declared 
{
   let city;
   let name = "Rohit"; 
   name = "Dhoni";
   console.log("Using Let Name Is: ", name);
   console.log(canCode)
}
console.log(name)


//The Scope Of const Declarations Are Also Local
//Const Declarations Can Neither Be Updated Nor Re-Declared
const country = "India";
//country = "Italy"   //Cannot Do This Bcz Variable Is Constant
console.log(country);

const _fruits = ["Mango", "Apple","Banana"]
console.log(_fruits)
_fruits.push('Pommy');
console.log(_fruits)
