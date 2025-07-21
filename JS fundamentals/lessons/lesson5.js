//Logical "AND"
console.log(true && true)
console.log(false && true)

//Logical "OR"
console.log(false || false)
console.log(false || true)

var ageIsMoreThanEighteen = false
var isUSCitizen = true;

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen; //with AND
console.log("This customer is eligible for driver license: " + eligibilityForDriversLicense)

var eligibilityForDriversLicense2 = ageIsMoreThanEighteen || isUSCitizen; //with OR
console.log("This customer is eligible for driver license: " + eligibilityForDriversLicense2)

//Logical "NOT"
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10)