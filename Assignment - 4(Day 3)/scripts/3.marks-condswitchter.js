var marks1 = prompt("Please Enter Your Marks");
var marks2 = prompt("Please Enter Your Marks");
var marks3 = prompt("Please Enter Your Marks");
var marks4 = prompt("Please Enter Your Marks");
var marks5 = prompt("Please Enter Your Marks");


var avg = (+marks1 + +marks2 + +marks3 + +marks4 + +marks5)/5;
console.log(avg);

//Using Conditional Statements
if(avg>=90)
{
    console.log("Grade Is A");
}
else if(avg<90 && avg>=80)
{
    console.log("Grade Is B");
}
else if(avg<80 && avg>=70)
{
    console.log("Grade Is C");
}
else if(avg<70 && avg>=60)
{
    console.log("Grade Is D");
}
else
{
    console.log("Grade Is E");
}

//Using Switch Case
switch(true)
{
    case (avg>=90):
        console.log("Grade Is A");
        break;
    case (avg<90 && avg>=80):
        console.log("Grade Is B");
        break;
    case (avg<80 && avg>=70):
        console.log("Grade Is C");
        break;
    case (avg<70 && avg>=60):
        console.log("Grade Is D");
        break;
    default:
        console.log("Grade Is E");
}

//Using Ternary Operator
var result = (avg>=90) ? 'Grade Is A' : (avg<90 && avg>=80) ? 'Grade Is B' : (avg<80 && avg>=70) ? 'Grade Is C' :
             (avg<70 && avg>=60) ? 'Grade Is D' : 'Grade Is E';
             
console.log(result);