num = prompt("Please Enter A Number");
function checkNumber(num){
    check = num%2
    if(check == 0)
    {
        return "It Is An Even Number";
    }
    else
    {
        return "It Is An Odd Number";
    }
}

let result = checkNumber(num);
console.log(result)
