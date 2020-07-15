//We Required Data Types To Hold Different Types Of Values In Different Containers
//There Are 2 Types Of Data Types In JavaScript i.e. Primitive & Non-Primitive Data Types
//Primitive Data Types Are Predefined Types Of Data, Which Are Supported By The JavaScript
//There Are 5 Types Of Primitive Data Types In JavaScript As String, Integer, Boolean, Undefined, Null & Float.

//String
var a = "Harsh"
console.log(a)

//Integer
var b = 20
console.log(b)

//Boolean
var c = (6==7)
console.log(c)
var d = 100>99
console.log(d)

//Undefined
var e = 
console.log(e)

//Null
var f = null
console.log(f)

//Float
var g = 2.6
console.log(g)
//Non-Primitive Data Types Refer To Objects And Hence They Are Called Reference Data Types By JavaScript
//There Are 3 Types Of Non-Primitive Data Types In JavaScript As Object, Array & RegExp.

//Object - It represents instance through which we can access members
var emptyObject = {};
var person = {"Name": "Harsh", "Surname": "Saxena", "Age": "20"};
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 7
}
console.log(emptyObject)
console.log(person);
console.log(car);

//Array - It represents group of similar values
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
var number = [5,10,20,56,99]
console.log(colors[0])
console.log(cities[2])
console.log(number[3])

//Regular Expression - It is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations.
var str = "Visit Udemy!";
var n = str.search("Udemy");
console.log(n)

var n2 = str.search(/GeeksforGeeks/);   //Searching Without Modifier i
console.log(n2)

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "Udemy");
console.log(res)

