//To Change The Background Color Of Page After Every 5 Seconds 

var doc = document.getElementById("background");
var color = ["black", "blue", "red", "yellow", "brown", "green"];
var i = 0;

function change() 
{
  doc.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) 
  {
    i = 0;
  }
}
setInterval(change, 5000);