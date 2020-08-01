//To Get The Input Of Specified Time For Which The StopWatch Should Stop Post Starting
var setTime = prompt('Please Set The Timer For StopWatch', 'Hours : Minutes : Secnnds');
time = setTime.split(':');
console.log('The StopWatch Is Running For : ' +time);
timer();


//To Set Hours, Minutes & Seconds To 0
var h1 = document.getElementsByTagName('h1')[0],
    Start = document.getElementById('Start'),
    Stop = document.getElementById('Stop'),
    Reset = document.getElementById('Reset'),
    hours = 0, minutes = 0, seconds = 0,
    t;


//Function To Increment The StopWatch 
function inc_time() 
{
    setHours = time[0];
    setMin = time[1];
    setSec = time[2];

    seconds++;
    if (seconds >= 60) 
    {
        seconds = 0;
        minutes++;
        if (minutes >= 60) 
        {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" 
                   + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" 
                   + (seconds > 9 ? seconds : "0" + seconds);

    //Calling The Timer To Start StopWatch
    timer();

    //Stop The Watch If Timer == Input By User
    if(hours == setHours && minutes == setMin && seconds == setSec)
    {
        clearTimeout(t);
    }   
}

//Function To Start Timer
function timer() 
{  
    t = setTimeout(inc_time, 1000);
}
        

//Start Button
Start.onclick = timer;


//Stop Button
Stop.onclick = function() 
{
    clearTimeout(t);
}


//Reset Button 
Reset.onclick = function() 
{
    h1.textContent = "00:00:00";
    hours = 0; minutes = 0; seconds = 0;
}