class Calculator {
    constructor () {
        this.answer = null
        this.cumulative = null
        this.operator = null
        this.number = ""
        this.firstNumber = null
        this.secondNumber = null
        this.screen = ""
    }

    operation (num1, num2, operator) {
        switch (operator) {
            case "+": return num1+num2
            case "-": return num1-num2
            case "x": return num1*num2
            case "/": return num1/num2
            case "mod": return num1%num2
        }
    }

    equals () {

    }

    input (value) {

        if (this.number == "") {
            switch (value) {
                case ".": 
                    this.number = "0"+value
                    break;
                default: 
                    this.number = value
            }

            this.screen = this.number
        }

        else {
            switch (value) {
                case ".":
                    if (!(this.number).includes(".")) this.number += value
                    break;

                case "+":
                    if (!this.firstNumber) {
                        this.firstNumber = this.number
                        this.number = ""
                    }

                    else {

                    }
                case "-":
                case "x":
                case "mod":
                case "/":
                case "equals":
                default:  
                    this.screen += value
                    break;  
            } 
        }            
    }

    allClear() {
        this.answer = null
        this.cumulative = null
        this.currentOperator = null
        this.nextOperator = null
        this.currentNumber = null
        this.nextNumber = null
        this.screen = "0"

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


