//Declarative functions
helloWorld(); //poate fi invocata si inainte de a fi declarata
function helloWorld(){
    console.log("Hello World!")
}



//Anonymous function
var helloTwo = function(){
    console.log("hello World 2!")
}
helloTwo()


//ES6 function or arrow function
var helloThree = () => {
    console.log("Hello three!");
}
helloThree();

//Function with arguments
function printName(name){
    console.log("Hello " + name)
}
printName("Adi")

//Function with return
function multiplyByTwo (number){
    var result = number *2
    return result;
}

var myResult = multiplyByTwo(5);
console.log(myResult)

//import functions
import {printAge} from "..//helpers/printhelper.js"
printAge(5)

//import everything
import * as helper from "..//helpers/printhelper.js"
helper.printAge(10)