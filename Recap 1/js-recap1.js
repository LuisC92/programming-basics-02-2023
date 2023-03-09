//* create a variable
let firstName = "John"

//* using if statement
if(firstName === "John"){
    console.log("Hello Again, John!")
} else {
    console.log("Hello, " + firstName)
}

//* reassign variable again
firstName = "Joe"
//* using ternary operator
firstName === "John" ? console.log("Hello Again, John!") : console.log("Hello, " + firstName)

//* reassign variable
firstName="Smith"
//* using if statement
if(firstName === "John"){
    console.log("Hello Again, John!")
} else if(firstName === "Smith"){
    console.log("Hello Mr Smith!")
} else {
    console.log("Hello, " + firstName)
}

//* reassign variable again
firstName = "Joe"
//* using nested ternary operator
firstName === "John" ? console.log("Hello Again, John!") : 
firstName === "Smith" ? console.log("Hello MR Smith!") : 
console.log("Hello, " + firstName)

