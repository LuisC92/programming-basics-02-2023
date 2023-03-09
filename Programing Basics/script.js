
//* create a first variable
let firstText = "John";
//* create a second variable
let secondText = "Doe"
//* compare the two variables
firstText == secondText // false

//* create a integer 
let numberOne = 3
//* create a string 
let numberTwo = "3"
//* comparing with different equal signs
numberOne == numberTwo // true
numberOne === numberTwo // false
numberOne !== numberTwo // true

//* 3 ways to concat the two first string variables
let fullName = firstText + secondText // JohnDoe

fullName = firstText + " " + secondText // John Doe

fullName = ` My name is ${firstText} ${secondText}` // My name is John Doe

//* create a function
function allName(){
    console.log(fullName)
    return fullName
}
//* call the function
allName() // My name is John Doe

//* create a function that have 2 parameters
function sayHello(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
    // return `${firstName} ${lastName}`
}
//* call the function and store the result
const result1 = sayHello("Mickey", "Mouse")

const result2 = sayHello(firstText, secondText)

console.log(`results: ${result1} , ${result2}`)

//* create an array
let vegetables = ["potato","carrot","cucumber"]

//* loop the array using a for loop
for(let i = 0; i < vegetables.length  ; i++){
    console.log(`turn ${i}:`)
    console.log(vegetables[i])
}

//* create a starting variable for the loop
let number = 0
//* use a while loop to count until 4
while(number < 5){
    
    console.log(number)
    //* 3 ways of how to increment a number
    // number = number + 1
    // number += 1
    number ++
}