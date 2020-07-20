const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using Javascript"
    }
}


//Destructuring The Object As:-
console.log(student.name);
console.log(student.projects.diceGame);

const {name, age, projects:{diceGame}} = student;
console.log(name, age, diceGame);

alert(name);
alert(age);
alert(diceGame);