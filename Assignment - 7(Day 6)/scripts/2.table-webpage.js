//Function To Print The Table Of Inputted Number:-

function printTable()
{
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++)
    {
        var pTag = document.getElementById('numPrint');
        pTag.innerHTML += (num + " x " + i + " = " + num*i) + "<br/>"
    }
    
}