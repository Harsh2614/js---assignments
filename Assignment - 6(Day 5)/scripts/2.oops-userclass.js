class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }

    deleteCourse(user){
        var index = 1;
        user.courses.splice(index,1);
        console.log(user); 
    }
 }
 

let user1 = new User('Harsh',20,'harsh@gmail.com')
let user2 = new User('Hardik',25,'Hardik@gmai.com')
let mod = new Moderator('Dhoni',39,'Dhoni@gmail.com','Moderator');
let admin = new Admin('Rohit',32,'Rohit@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.removeCoins();
mod.removeCoins();

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'Blockchain');
admin.deleteCourse(user1);

user1.login();
user1.logout();

admin.addCourse(user2,'Javascript');
admin.addCourse(user2,'Python');
admin.addCourse(user2,'Blockchain');
admin.addCourse(user2,'AI');
admin.deleteCourse(user2);
