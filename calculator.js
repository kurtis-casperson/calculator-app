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
      secondNumber = firstNumber
      firstNumber = ''
    }

    firstNumber = firstNumber.concat(numberPressed)
    displayScreen.innerText = firstNumber

    return
  }
  console.log('firstNumber', firstNumber)
  console.log('secondNumber', secondNumber)
}

function calculate() {
  let numOne = parseFloat(firstNumber)
  let numTwo = parseFloat(secondNumber)

  if (storedOperator === '+') {
    secondNumber = numOne + numTwo
    displayCalculation()
  }
  if (storedOperator === '-') {
    secondNumber = numTwo - numOne
    displayCalculation()
  }
  if (storedOperator === '*') {
    secondNumber = numOne * numTwo
    displayCalculation()
  }
  if (storedOperator === '/') {
    secondNumber = numTwo / numOne
    displayCalculation()
  }
}

function displayCalculation() {
  displayScreen.textContent = parseFloat(secondNumber.toFixed(3))
  firstNumber = ''
  console.log(storedOperator, 'storedOperator')
}
