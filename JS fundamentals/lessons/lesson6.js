//Conditional statement

// if (condition){
//     //execute some code here
// } else{
//     //execute some code here
// }

//if hour between 6 and 12 print "good morning"
//if hour beetween 12 and 18 print "good afternoon"
//otherwise: good evening
var hour = 13
if (hour > 6 && hour < 12){
    console.log ("good morning")
} else if (hour > 12 && hour < 18){
    console.log("good afternoon")
} else{
    console.log("good evening")
}

var ageIsMoreThanEighteen = true;
var isUSCitizen = true;

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log("you'll got the DL")
} else {
    console.log("no DL for you")
}