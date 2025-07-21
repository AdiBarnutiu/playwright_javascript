//Loops

for (var i = 0; i <=5; i++){
    console.log ("Hello world!" + i)
}
console.log("**********************")
var cars = ["Volvo", "Toyota", "Tesla"]

//for i loop
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

console.log("**********************")


//for of loop
for (var car of cars){
    console.log(car);
    if (car == "Toyota"){
        break;
    }
}

// ES6 synthax
