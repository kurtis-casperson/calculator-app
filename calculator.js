const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')
const displayResult = document.getElementById('numberDisplay')
const equalButton = document.getElementById('equalBtn')

const clearButton = document.getElementById('clearBtn')
const buttonsArray = [...buttons]
const operatorArray = [...operators]
let firstOperandArray = []
let secondOperandArray = []
let operation = ''
let result = ''

clearButton.addEventListener('click', () => {
  displayResult.textContent = ''
  firstOperandArray = []
  secondOperandArray = []
  operation = ''

  result = ''
})

const buttonDisplayFunction = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      displayResult.textContent = button.value
    })
  })
}

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      if (operation.length === 0 && secondOperandArray.length === 0) {
        if (firstOperandArray.includes('.') && button.value === '.') {
          return
        }

        firstOperandArray.push(button.value)
        displayResult.textContent = firstOperandArray.join('')
      }
      if (operation.length === 1 && firstOperandArray.length > 0) {
        if (secondOperandArray.includes('.') && button.value === '.') {
          return
        }
        secondOperandArray.push(button.value)
        displayResult.textContent = secondOperandArray.join('')
      }
    })
  })
}

const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      if (firstOperandArray.includes('.') && firstOperandArray.length === 1) {
        firstOperandArray.push('0')
      }
      if (secondOperandArray.includes('.') && secondOperandArray.length === 1) {
        secondOperandArray.push('0')
      }
      if (firstOperandArray.length === 0) {
        operation = operator.value
        if (operation.length === 1) {
          operation = ''
        }
        if (result !== '') {
          operation = operator.value
        }
      }
      if (secondOperandArray.length === 0 && firstOperandArray.length > 0) {
        operation = operator.value
        if (operation.length === 1) {
          operation = ''
        }
        if (result !== '') {
          operation = operator.value
        }
      }
      if (
        operation.length !== 0 &&
        firstOperandArray.length > 0 &&
        secondOperandArray.length > 0
      ) {
        if (operation === '+') {
          result =
            convertToNumbers(firstOperandArray.join('')) +
            convertToNumbers(secondOperandArray.join(''))
          firstOperandArray = String(result).split('')
          secondOperandArray = []
        }
        if (operation === '-') {
          result =
            convertToNumbers(firstOperandArray.join('')) -
            convertToNumbers(secondOperandArray.join(''))
          firstOperandArray = String(result).split('')
          secondOperandArray = []
        }
        if (operation === '*') {
          result =
            convertToNumbers(firstOperandArray.join('')) *
            convertToNumbers(secondOperandArray.join(''))
          firstOperandArray = String(result).split('')
          secondOperandArray = []
        }
        if (operation === '/') {
          result =
            convertToNumbers(firstOperandArray.join('')) /
            convertToNumbers(secondOperandArray.join(''))
          firstOperandArray = String(result).split('')
          secondOperandArray = []
        }
        operation = operator.value
      } else {
        operation = operator.value
      }
    })
  })
}

function convertToNumbers(value) {
  return Number(value)
}

equalButton.addEventListener('click', () => {
  if (operation === '+') {
    displayResult.textContent =
      convertToNumbers(firstOperandArray.join('')) +
      convertToNumbers(secondOperandArray.join(''))
  }
  if (operation === '-') {
    displayResult.textContent =
      convertToNumbers(firstOperandArray.join('')) -
      convertToNumbers(secondOperandArray.join(''))
  }
  if (operation === '*') {
    displayResult.textContent =
      convertToNumbers(firstOperandArray.join('')) *
      convertToNumbers(secondOperandArray.join(''))
  }
  if (operation === '/') {
    displayResult.textContent =
      convertToNumbers(firstOperandArray.join('')) /
      convertToNumbers(secondOperandArray.join(''))
  }

  result += +displayResult.textContent
  firstOperandArray = []
  secondOperandArray = []
  operation = ''
})

const calculation = () => {
  const numberDisplay = buttonDisplayFunction(buttonsArray)
  const operatorOptions = operatorEvents(operatorArray)
  const numberButton = numberEvents(buttonsArray)

  return numberDisplay, operatorOptions, numberButton
}

calculation()
