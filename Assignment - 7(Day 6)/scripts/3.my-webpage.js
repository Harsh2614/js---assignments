function nameUser()
{
    var num;
    customerName = document.getElementById('txtName').value;

    if (customerName!= null) 
    {

        var pTag = document.getElementById("welcome");
        pTag.innerHTML = "Hello " + customerName + "," + " Welcome To My First Webpage!";

    }
}



//Adding A Clock In A WebPage:-
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();
setInterval(clock,1000);


//ClassList Method To Toggle Between Dark & Light Mode:-
function myFunction() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}
  