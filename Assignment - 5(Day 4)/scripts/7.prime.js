//To Print The Prime Numbers From 2 To n
n = prompt("Upto Which Number You Want To Print The List Of Prime Numbers?");

function primeNum(num) 
{
	for (var i=2; i<num; i++) 
	{
		if (num%i === 0) 
		{
            return false;
        }
    }
    return true;
}

function display(n) 
{
    var arr = [2];
	for (var i=3; i<n; i+=2) 
	{
		if(primeNum(i)) 
		{
            arr.push(i);
        }
    }
    console.log(arr); 
}

display(n);