//String Methods
str = "I am learning javascript on let's upgrade";

console.log(str);

//String Length - Use to returns the length of a string
console.log(str.length);

//String CharAt - Use to returns the character at the specified index (position)
console.log(str.charAt(9));

//String CharCodeAt - Use to returns the Unicode of the character at the specified index
console.log(str.charCodeAt(26));

//String Concatenation - Use to Joins two or more strings, and returns a new joined strings
str2 = " And it's Day2 Assignment";
console.log(str.concat(str2));

//String EndsWith - Use to checks whether a string ends with specified string/characters
console.log(str.endsWith('upgrade'));

//String FromCharCode - Use to converts Unicode values to characters
console.log(String.fromCharCode(98));

//String Includes - Use to checks whether a string contains the specified string/characters
console.log(str.includes("javascript"));
console.log(str.includes("javascript",24));

//String IndexOf - Use to returns the position of the first found occurrence of a specified value in a string
console.log(str.indexOf("l"));

//String LastIndexOf - Use to returns the position of the last found occurrence of a specified value in a string
console.log(str.lastIndexOf("l"));

//String LocaleCompare - Use to Compares two strings in the current locale
console.log(str.localeCompare(str2));

//String Match - Use to searches a string for a match against a regular expression, and returns the matches
console.log(str.match(/ing/g));

//String Repeat - Use to returns a new string with a specified number of copies of an existing string
console.log(str.repeat(2));

//String Replace - Use to searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log(str.replace("javascript","python"));

//String Slice - Use to extracts a part of a string and returns a new string
console.log(str.slice(2,30));

//String Split - Use to splits a string into an array of substrings
console.log(str.split("a"));

//String Startswith - Use to checks whether a string begins with specified characters
console.log(str.startsWith("am"));

//String Substr - Use to extracts the characters from a string, beginning at a specified start position, and through the specified number of character
console.log(str.substr(4,35));

//String ToLowerCase - Use to converts a string to lowercase letters
console.log(str.toLowerCase());

//String ToUpperCase - Use to converts a string to Uppercase letters
console.log(str.toUpperCase());

//String ToString - Use to returns the value of a String object
console.log(str.toString());

//String Trim - Use to removes whitespace from both ends of a string
str3 = "          Hello!            "
console.log(str3.trim());

//String ValueOf - Use to returns the primitive value of a String object
console.log(str.valueOf());



//Array Methods
var lang = ['C','Python','Java','DS','Web Dev'];
console.log(lang);

//String Length - Use to returns the length of a array
console.log(lang.length);

//Array ToString - Use to converts an array to a string of (comma separated) array values
console.log(lang.toString());

//Array Join - Use to joins all array elements into a string
console.log(lang.join('#'));

//Array Pop - Use to removes the last element from an array
console.log(lang.pop());
console.log(lang);

//Array Push - Use to adds a new element to an array (at the end)
console.log(lang.push("JS"));
console.log(lang);

//Array Shift - Use to removes the first array element and "shifts" all other elements to a lower index
console.log(lang.shift());
console.log(lang);

//Array Unshift - Use to  adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(lang.unshift("NodeJS"));
console.log(lang);

//Array Delete - Use to delete elements from an array
console.log(delete lang[0]);
console.log(lang);

//Array Concatenation - Use to  creates a new array by merging (concatenating) existing arrays
sub = ['ML','AI','DSc'];
console.log(lang.concat(sub));

//Array Slice - Use to slices out a piece of an array into a new array
console.log(lang.slice(1,5));

//Array Sort - Use to sort the elements in ascending or alphabetical order
console.log(lang.sort());

//Array Reverse - Use to reverse the whole array
console.log(lang.reverse());

//Array IndexOf - Use to return the first index of particular element in an array
console.log(lang.indexOf("JS"));

