"use strict";
let x = 10;
x = 25;
console.log(x);
let y = 12; //inferencia
let z = 12; //annotation
let firstName = "Davi";
let age = 36;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
//tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.name);
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const prosuctId = "00001";
const shirId = 123;
// enum
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
teste = "algumvalor";
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 5));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Davi"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Cloud");
greeting("Barret");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 3, n2: 5 }));
function mutiplNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(mutiplNumbers(someNumbers));
//narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItens(a1);
showArrayItens(a2);
// classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    brand;
    whells;
    constructor(brand, wheels) {
        this.brand = brand;
        this.whells = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//Herança
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        };
    };
}
;
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
const sam = new Person("Sam");
console.log(sam);
