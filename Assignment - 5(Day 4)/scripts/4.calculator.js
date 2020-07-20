
function additionOf()
{
        num1 = document.getElementById("FirstNumber").value;
        num2 = document.getElementById("SecondNumber").value;
        document.getElementById("result1").innerHTML = +num1 + +num2;
}

function subtractionOf()
{
        num1 = document.getElementById("FirstNumber").value;
        num2 = document.getElementById("SecondNumber").value;
        document.getElementById("result1").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("FirstNumber").value;
        num2 = document.getElementById("SecondNumber").value;
        document.getElementById("result1").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("FirstNumber").value;
        num2 = document.getElementById("SecondNumber").value;
        document.getElementById("result1").innerHTML = num1 / num2;
}

function sqrtOf()
{
        num = document.getElementById("Number").value;
        document.getElementById("result2").innerHTML = Math.sqrt(num);
}

function percentOf()
{
        num = document.getElementById("Number").value;
        percent = prompt("How Much % You Want Of A Number")
        document.getElementById("result2").innerHTML = (percent/100)*num;
}