//Concatination and Interpolation

var itemName = "Cup"
var price = 50
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)