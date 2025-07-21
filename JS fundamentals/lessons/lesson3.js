//Objects 
var customer = {
    firstname: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer.firstname)
console.log(customer['firstname'])
console.log(customer.lastName)
console.log(customer['lastName'])
console.log(customer)

//Dot notation
customer.firstname = "Adrian"
customer.lastName = "Barnutiu"
console.log(customer['firstname'])
console.log(customer['lastName'])

//Brackets notation
customer['firstname'] = "Ian"
customer['lastName'] = "Bebelusul"
console.log(customer['firstname'])
console.log(customer['lastName'])
console.log(`${customer.firstname} ${customer.lastName}`)
console.log(customer.cars[2])

//Arrays
var cars = ["Volvo", "Toyota", "Tesla"]
cars[1] = "BMW" //replace the value
console.log(cars[0])
console.log(cars[1])