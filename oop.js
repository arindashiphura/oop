//component are mostely used in front end development to create reusable UI elements.

let person1 = {
  name: "arinda",
  age: 19,
};
let person2 = {
  name: "shiphura",
  age: 19,
};
//constructor function, starts with capital letters
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person3 = new Person("favor", 20);
let person4 = new Person("esther", 21);
let person5 = new Person("imme", 22);
let person6 = new Person("daphine", 23);
console.log(person1, person2, person3, person4, person5, person6);

//class in javascript is a blueprint for creating objects.
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person7 = new People("emily", 24);
let person8 = new People("kirabo", 32);
let person9 = new People("fortunate", 34);
let person10 = new People("prossy", 33);
let person11 = new People("afra", 37);

console.log(person7, person8, person9, person10, person11);



let rectangle5 = {
  length: 5,
  width: 19,
};
let rectangle6 = {
  length: 5,
  width: 19,
};
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

let rectangle1 = new Rectangle(10, 5);
let rectangle2 = new Rectangle(12, 6);
let rectangle3 = new Rectangle(10, 7);
let rectangle4 = new Rectangle(10, 8);
console.log(rectangle1, rectangle2, rectangle3, rectangle4);

//function to create a rectangle
class Rectangles {
    constructor(length, width) {
      this.length = length;
      this.width = width;
      this.calcMethod =calcMethod
    }
    calculateArea() {             //calculating area of rectangle
     return this.calcMethod (this.length * this.width);
    }
    
    calculateperimeter() {             //calculating perimeter of rectangle
        return this.length + this.width+ this.length + this.width;
      }
  }

 let rectangle8 = new Rectangles(5, 19);

  console.log(rectangle8.calculateArea());

  console.log(rectangle8.calculateperimeter());

 
 
 
  //inheritance
  class Cse {
    constructor(name) {
      this.name = name;
      
    }
    writeCode() {
      console.log(` ${this.name} writes code`);
    }
}
class Js extends Cse {
    constructor(name){
          super(name);
    }
    writeCode() {
        console.log(` ${this.name} writes javascript code`);
      }
}

let jsEngineer = new Js("Arinda");
 




