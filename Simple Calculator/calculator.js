
let firstValue = parseInt(prompt("What is the first value?"))
let secondValue = Number(prompt("What is the second value?"))
let operator = prompt("What is the operator?")

console.log("firstValue: " + firstValue + " secondValue: " + secondValue + " operator: " + operator)

// let result

// if(operator === "+"){
//    result = firstValue + secondValue
//    console.log("result:", result)

// } else if(operator === "-"){
//     result = firstValue - secondValue
//     console.log("result:", result)

//  } else if(operator === "*"){
//     result = firstValue * secondValue
//     console.log("result:", result)

//  } else if(operator === "/"){
//     result = firstValue / secondValue
//     console.log("result:", result)
//  }


function calculator(){
    switch(operator){
        case "+":
            console.log("result:", firstValue + secondValue)
        break
        case "-":
            console.log("result:", firstValue - secondValue)
        break
        case "*":
            console.log("result:", firstValue * secondValue)
        break
        case "/":
            console.log("result:", firstValue / secondValue)
        break
        default:
            alert(`invalid inputs: ${firstValue}, ${secondValue}, ${operator}`)
        break
    
    }
}

calculator()
