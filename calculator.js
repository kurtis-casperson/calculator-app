const numberButtons = document.querySelectorAll('.number-btn')
const operatorButtons = document.querySelectorAll('.operator-btn')
const displayScreen = document.getElementById('displayScreen')
const clearButton = document.getElementById('clearBtn')
const equalButton = document.getElementById('equalBtn')

let firstNumber = ''
let secondNumber = ''
let currentOperator = ''
let storedOperator = ''

numberButtons.forEach((number) => {
  number.addEventListener('click', (event) => {
    let number = event.target.value
    dispalyUserInput(number)
  })
})

operatorButtons.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    currentOperator = event.target.value
    if (firstNumber && secondNumber) {
      claculate()
    }
    console.log(currentOperator)
  })
})

clearButton.addEventListener('click', () => {
  displayScreen.textContent = ''
  firstNumber = ''
  secondNumber = ''
  currentOperator = ''
  storedOperator = ''
})

equalButton.addEventListener('click', calculate)

const dispalyUserInput = (numberPressed) => {
  storedOperator = currentOperator
  if (!currentOperator) {
    firstNumber = firstNumber.concat(numberPressed)
    displayScreen.textContent = firstNumber
  }
  if (currentOperator || secondNumber) {
    if (!secondNumber) {
      secondNumber = firstNumber.concat(numberPressed)
      firstNumber = ''
    }
  }

  firstNumber = firstNumber.concat(numberPressed)
  displayScreen.innerText = firstNumber
  console.log('firstNumber', firstNumber)
  console.log('secondNumber', secondNumber)

  return
}

function calculate() {
  let numOne = parseFloat(firstNumber)
  let numTwo = parseFloat(secondNumber)

  if (storedOperator === '+') {
    secondNumber = numOne + numTwo
    displayCalculation()
  }
  if (storedOperator === '-') {
    secondNumber = numOne - numTwo
    displayCalculation()
  }
  if (storedOperator === '*') {
    secondNumber = numOne * numTwo
    displayCalculation()
  }
  if (storedOperator === '/') {
    secondNumber = numOne / numTwo
    displayCalculation()
  }
}

function displayCalculation() {
  displayScreen.textContent = parseFloat(secondNumber.toFixed(3))
  firstNumber = ''
}
