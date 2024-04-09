const calculatorScreen = document.getElementById("calculator-screen")

let inNum1 = true;
let num1 = "0";
let num2 = "0";
let operator = "";
calculatorScreen.value = "0"


function appendToDisplay(input){
    
    if(input === "-" && (num1 === "0" || num1 === "0.")){
        if(inNum1 && (num1 !== "-" || num1 !== "-0.")){
            if(num1 === "0."){
                num1 = "-" + num1;
            }
            else{
                num1 = "-"
            }
            calculatorScreen.value =num1;
            return;
        }
    }
    else if (input === "-" && operator !== "" && !inNum1 && (num2 === "0" || num2 === "0.")){
        if(num2 !== "-0" || num2 !== "-0."){
            if(num2 === "0."){
                num2 = "-" + num1;
            }
            else{
                num2 = "-"
            }
            calculatorScreen.value =num1;
            return;
        }
    }



    if(input === "="){ /// calculate
        num1 = calculate(operator,num1,num2);
        num2 = "0";
        operator = ""
        return;
    }
    
    
    
    /// select operator
    if (input === "/" || input === "*" || input === "-" || input === "+" && num1 !== "0"){
        inNum1 = false;
        operator = input;
    }
    
    
    
    if (parseFloat(input) || input === "0" || input === "."){ /// append numbers to screen
        updateScreen(input)
    }
        

}



function updateScreen(input){
    if(inNum1){
        if(num1 === "0"){
            if (input === "."){
                num1 = "0.";
            }
            else{
                num1 = input
            }
            calculatorScreen.value = num1
        }
        else if (num1 === "-"){
            if (input === "."){
                num1 = "-0."

            }
            else{
                num1 = "-" + input
            }
            calculatorScreen.value = num1
        }
        
        else{
            num1 += input;
            calculatorScreen.value = num1
        }
    }
    else{
        if(num2 === "0"){
            if (input === "."){
                num2 = "0.";
            }
            else{
                num2 = input;
            }
            calculatorScreen.value = num2
        }
        else if (num2 === "-"){
            if (input === "."){
                num2 = "-0."

            }
            else{
                num2 = "-" + input
            }
            calculatorScreen.value = num2
        }
        else{
            num2 += input;
            calculatorScreen.value = num2
        }
    }
}



function clearDisplay(){
    calculatorScreen.value = "0";
    inNum1 = true;
    num1 = "0";
    num2 = "0";
    operator = "";
}

function clearEntry(){
    if (calculatorScreen.value === "Wrong Operation") {
        clearDisplay();
    }   

    if (inNum1){
        if(num1.slice(0,-1) != ""){
            num1 = num1.slice(0,-1)
        }
        else{
            num1 = "0"
        }
        calculatorScreen.value = num1

    }
    else{
        if(num2.slice(0,-1) != ""){
            num2 = num2.slice(0, -1);
        }
        else{
            num2 = "0"
        }
        calculatorScreen.value = num2
    }
}

function calculate(operator,num1,num2){
    num1 = Number(num1)
    num2 = Number(num2)
    inNum1 = true;

    switch (operator) {
        case "+":
            num1 = num1 + num2;
            break;
        case "-":
            num1 = num1 - num2;
            break;
        case "*":
            num1 = num1 * num2;
            break;
        case "/":
            if(num1 == 0 && num2 == 0){
                calculatorScreen.value = "Wrong Operation"
                return num1 = "0"
            }
            num1 = num1 / num2;
            break;    
    }



    calculatorScreen.value = num1
    return num1 = num1.toString()
}