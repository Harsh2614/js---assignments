var text;
var favLang = prompt("What's Your Favorite Programming Language?");
switch(favLang) 
{
    case "C":
        text = "Excellent Choice! You Should Start With C First";
        console.log(text);
        break;
    case "Python":
        text = "The Easiest Programming Language Available Ryt Now!";
        console.log(text);
        break;
    case "Java":
        text = "Little Bit Of Complex One, But I Lyk Java Very Much";
        console.log(text);
        break;
    case "Web Development":
        text = "Most Useful Language In The World Ryt Now Alongwith JavaScript!"
        console.log(text);
        break;
    default:
        text = "Sorry! I Haven't Heard About That Language....";
        console.log(text);
        break;
}