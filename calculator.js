
//math operation functions
function add (val1, val2){
    return(Number(val1) + Number(val2))
}

function subtract(val1, val2){
    return(Number(val1) - Number(val2))
}

function multiply(val1, val2){
    return(Number(val1) * Number(val2))
}

function divide(val1, val2){
    return(Number(val1)/Number(val2))
}

function mod(val1, val2){
    return(Number(val1)%Number(val2))
}
function operate(val1, val2, operator){
    
    switch (operator){
        case "+":
            return add(val1,val2)

        case "-":
            return subtract(val1,val2)
        
        case "*":
            return multiply(val1,val2)
        
        case"/":
            if(val2==="0"){
                return "err"
            }
            return divide(val1,val2)

        case"%":
            return mod(val1,val2)
    }
    
}


// Calculator state
let currentInput = ""
let previousInput = ""
let operator = ""
result = 0
let shouldResetDisplay = false
const display = document.querySelector('.display-section')

function updateDisplay(value){
    display.textContent = value || "0"
}

function handleButtonClick(event){
    const buttonValue = event.target.textContent

    if (isNumber(buttonValue) || buttonValue === ".") {
        handleNumber(buttonValue)
    } else if (isOperator(buttonValue)) {
        handleOperator(buttonValue)
    } else if (buttonValue === "=") {
        handleEquals()
    } else if (buttonValue === "CE") {
        handleClear()
    }
}

function isOperator(value) {
    return ["+", "-", "*", "/", "%"].includes(value)
}

function isNumber(value) {
    return !isNaN(value) || value === "."
}

function handleOperator(op) {
    if (currentInput === "") return
    
    if (previousInput !== "" && operator !== "") {
        handleEquals()
    }
    
    operator = op
    previousInput = currentInput
    shouldResetDisplay = true
}

function handleNumber(num){
    if (shouldResetDisplay) {
        currentInput = ""
        shouldResetDisplay = false 
    } 
    // Prevent multiple decimals
    if (num === "." && currentInput.includes(".")) {
        return // Don't add decimal if one already exists
    }
    currentInput += num
    updateDisplay(currentInput)
}

function handleEquals(){
    if (previousInput=== "" || currentInput ==="" || operator ==="") return
    const result = operate(previousInput, currentInput ,operator)
    updateDisplay(result)
    currentInput = result.toString()
    previousInput = ""
    operator = ""
    shouldResetDisplay = true
}

function handleClear() {
    currentInput = ""
    previousInput = ""
    operator = ""
    result = 0
    shouldResetDisplay = false
    updateDisplay("0")
}

// Event listeners
const buttons = document.querySelectorAll('.calc-button, .equal-button')
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
})

// Initialize display
updateDisplay("0")
