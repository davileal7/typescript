let x: number = 10;
x = 25;
console.log(x);


let y = 12 //inferencia
let z: number = 12;  //annotation

let firstName: string = "Davi";
let age: number = 36;
const isAdmin: boolean = true;

console.log(typeof firstName)
firstName = "João"
console.log(firstName)

//object
const myNumbers: number[] = [1,2,3]
console.log(myNumbers)
console.log(myNumbers.length)
console.log(firstName.toUpperCase())

//tuplas

let myTuple: [number,string, string[]]

myTuple = [5, "teste", ["a", "b"]]

//object literals -> {prop: value}
const user: { name: string; age: number } = {
    name: "Pedro",
    age: 18,
}

console.log(user)

console.log(user.name)

// any
let a: any = 0

a = "teste";
a = true;
a= []

// union type
let id: string | number = "10"

id = 200

// id = true
// id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10
const prosuctId: myIdType = "00001"
const shirId: myIdType = 123

// enum

enum Size {
    P = "pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
}

console.log(camisa)

// literal types
let teste: "algumvalor" | null
teste = "algumvalor"
teste = null

// funções
function sum(a: number, b: number) {
    return a + b
}

console.log(sum(10,5))

function sayHello(name: string): string {
    return `Hello ${name}`
} 
console.log(sayHello("Davi"))

function logger(msg: string): void {    //void NÃO retorna nada
    console.log(msg)
}
logger("Teste")

function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
        return;
    }
    console.log(`Olá ${name}`)
}

greeting("Cloud")
greeting("Barret")
    
//interfaces
interface functionMatematicaParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: functionMatematicaParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 3, n2: 5}));


function mutiplNumbers(nums: functionMatematicaParams) {
    return nums.n1 * nums.n2    
}

const someNumbers: functionMatematicaParams = {
    n1: 5,
    n2: 10
}
console.log(mutiplNumbers(someNumbers))

//narrowing
//checagem tipos

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`)
        return;
    }
    console.log("Não foi passado um número")    
}

doSomething(5);
doSomething(true);

// generics
function showArrayItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArrayItens(a1)
showArrayItens(a2)

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é: ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita")
    }
}

const zeca = new User("Zeca","Admin", true)

console.log(zeca)

zeca.showUserName();

zeca.showUserRole(false)

//interface em classes
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car  implements IVehicle{

    brand
    whells

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.whells = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }

}

const fusca = new Car("VW", 4)

fusca.showBrand()

//Herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
    super(brand,wheels)
    this.engine = engine;
    }
}

const a4 = new SuperCar("Audi",4,2.0)
console.log(a4)

a4.showBrand()

// decorators
function BaseParamters() {
    return function <T extends{new(...args:any[]): {}}>(constructor: T) {
            return class extends constructor {
                id = Math.random();
                createAt = new Date()
            };
    };
    
}

@BaseParamters();
class Person {
    name 

    constructor(name: string) {
        this.name = name
    };
};

const sam = new Person("Sam");

console.log(sam);