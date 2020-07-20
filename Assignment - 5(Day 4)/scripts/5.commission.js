let sales, commission;
sales = prompt("What Is The Total Amount Of Sale Made By Employee During The Year?");
function calculate(sales)
{
    if(sales>=0 && sales<=5000)
    {
        commission = sales*0.02
    }
    else if(sales>5000 && sales<=10000)
    {
        commission = sales*0.05
    }
    else if(sales>10000 && sales<=20000)
    (
        commission = sales*0.07
    )
    else
    {
        commission = sales*0.10
    }
    return "The Total Amount Of Commission Earned By Employee Is " + commission;
}

let result = calculate(sales);
console.log(result);