//Taking A Positive Number From The User:-

let num = prompt("Plz Enter A Positive Number");

//Making A Array Of Numbers Till The Number Given By User
arr = [];
for(let i=0;i<=num;i++)
{
    arr.push(i);
}
console.log(arr);

//Using Higher Order Function To Filter The Odd Number 
let odd = arr.filter(el=>el%2!=0);
console.log(odd);

//Generating An Array Of Cubes Of The Filtered Number
let oddCubes = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(oddCubes);