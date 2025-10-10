
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

function operate(val1, val2, operator){
    
    switch (operator){
        case "+":
            add(val1,val2)
            break

        case "-":
            subtract(val1,val2)
            break;
        
        case "*":
            multiply(val1,val2)
            break;
        
        case"/":
            divide(val1,val2)
            break;
    }
    
}
const val1 = 0
const val2 = 0
const operator = ""