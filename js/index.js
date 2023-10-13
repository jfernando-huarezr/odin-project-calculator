class Calculator {
    constructor () {
        this.answer = null
        this.cumulative = null
        this.currentOperator = null
        this.nextOperator = null
        this.currentNumber = null
        this.nextNumber = null
        this.screen = []
    }

    sum (a,b) {        
        return a+b
    }

    res(a,b) {
        return a-b
    }

    mult(a,b) {
        return a*b
    }

    div(a,b) {
        return a/b
    }

    equals () {

    }

    input (value) {
        if (!this.screen)
        this.operation += value
        return this.operation
    }

    allClear() {
        this.answer = null
        this.cumulative = null
        this.currentOperator = null
        this.nextOperator = null
        this.currentNumber = null
        this.nextNumber = null
        this.screen = []
    }

    showScreen () {
        if (!this.screen.length) return "0"
        return this.screen.join(" ")
    }
}

let calculator = new Calculator()
let res = calculator.res(10,5)
console.log(res)