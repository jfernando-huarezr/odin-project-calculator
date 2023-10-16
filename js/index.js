class Calculator {
    constructor () {

        this.operator = null
        this.number = ""
        this.firstNumber = null
        this.screen = ""
    }

    operation (num1, num2, operator) {
        num1 = num1*1
        num2 = num2*1

        switch (operator) {
            case "+": return num1+num2
            case "-": return num1-num2
            case "x": return num1*num2
            case "/": return num1/num2
            case "mod": return num1%num2
        }
    }


    input (value) {

        if (this.number == "") {
            switch (value) {
                case ".": 
                    this.number = "0"+value
                    this.screen += ` ${this.number}`
                    break;
                case "+":                
                case "x":
                case "mod":
                case "/":
                case "=":
                case "AC":
                    break;
                
                default: 
                    this.number = value
                    this.screen += ` ${this.number}`
                    break;
            }            
        }

        else {
            switch (value) {
                case "0":
                    if (this.number === "0") break;
                case ".":
                    if (!((this.number).includes("."))) this.number += value
                    this.screen += `${value}`
                    break;

                case "+":
                case "-":
                case "x":
                case "mod":
                case "/":
                    console.log("clicks")

                    if (this.firstNumber === null) {
                        this.firstNumber = this.number
                        this.operator = value
                        this.number = ""
                        this.screen += ` ${value}`
                        
                    }

                    else if (this.operator) {
                        this.number = this.operation(this.firstNumber, this.number, this.operator)
                        this.firstNumber = this.number
                        this.operator = value
                        this.screen = this.number + " " +  this.operator
                        this.number = ""                      
                    }

                    break;
                
                case "=":
                    console.log("clicks")
                    if (!this.operator) break;

                    if (this.operator && this.number) {
                        this.screen = `${this.operation(this.firstNumber, this.number, this.operator)}`
                        this.operator = null
                    }

                    break;

                case "AC" :
                    this.allClear()
                    break;

                default:
                    this.number += value  
                    this.screen += value
                    break;  
            } 
        }            
    }

    allClear() {
        this.operator = null
        this.number = ""
        this.firstNumber = null
        this.screen = ""

        this.showScreen()
    }

    showScreen () {
        if (this.screen == "") return "0"
        return this.screen
    }
}

const calculator = new Calculator()

const calculatorScreen = document.querySelector(".screen p")
calculatorScreen.textContent = calculator.showScreen()

const buttonsCalculator = document.querySelectorAll("button.number, button.operation")

buttonsCalculator.forEach((element) => {    

    element.addEventListener("click", () => {
        keystroked = element.textContent
        calculator.input(keystroked)
        calculatorScreen.textContent = calculator.showScreen()
    })
})


