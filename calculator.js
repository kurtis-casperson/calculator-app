const buttonEvents = document.querySelectorAll('[data-button]')
const twobuttons = document.querySelectorAll('row-two')
const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')
const displayResult = document.getElementById('numberDisplay')
const memory = document.getElementById('memoryDisplay')

const buttonsArray = [...buttons]
const operatorArray = [...operators]
let firstOperandArray = []
let secondOperandArray = []
let operation = ''
let memoryHolder = ''
let result = ''
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
  displayResult.textContent = ''
  firstOperandArray = []
  secondOperandArray = []
  operation = ''
  memoryHolder = ''
  addMemoryButton = ''
  result = ''
})

// display functions

const buttonDisplayFunction = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      displayResult.textContent = button.value
    })
  })
}

// perform equations

// TODO:
// 1. after equal is pressed , need to be able to continue operations.  Clear the array
//2. Add memory
// 3.  if a decimal is pressed first and then an operator... this becomes 0.
// 4. error:  if decimal is clicked twice, the display keeps a decimal point displayed, but the operation functions normally.

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      // debugger
      if (operation.length === 0) {
        if (firstOperandArray.includes('.') && button.value === '.') {
          return
        }
        firstOperandArray.push(button.value)
        displayResult.textContent = firstOperandArray.join('')
      } else {
        if (secondOperandArray.includes('.') && button.value === '.') {
          return
        }

        secondOperandArray.push(button.value)
        displayResult.textContent = secondOperandArray.join('')
      }

      // result condition
      if (operation.length === 1 && result !== '') {
        if (firstOperandArray.includes('.') && button.value === '.') {
          return
        }
        firstOperandArray.push(button.value)
        displayResult.textContent = firstOperandArray.join('')

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
      if (firstOperandArray.length === 0) {
        operation = operator.value
        if (operation.length === 1) {
          operation = ''
        }
        if (result !== '') {
          operation = operator.value
        }
      } else {
        operation = operator.value
      }
    })
  })
}

// const operatorDisplayAction = (operatorArray) => {
// operatorArray.map((operator) => {
//   operator.addEventListener('click', () => {
//     document.getElementById(display).style.display = 'none'

//     document.getElementById(display).style.display = 'block'
//   })
// })
// }

const equalButton = document.getElementById('equal-btn')

equalButton.addEventListener('click', () => {
  if (operation === '+') {
    displayResult.textContent =
      Number(firstOperandArray.join('')) + Number(secondOperandArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '-') {
    displayResult.textContent =
      Number(firstOperandArray.join('')) - Number(secondOperandArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '*') {
    displayResult.textContent =
      Number(firstOperandArray.join('')) * Number(secondOperandArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '/') {
    displayResult.textContent =
      Number(firstOperandArray.join('')) / Number(secondOperandArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }

  result += +displayResult.textContent

  firstOperandArray = []
  secondOperandArray = []
  operation = ''
  console.log('firstOperandArray', firstOperandArray)
  console.log('secondOperandArray', secondOperandArray)
  console.log('operation', operation)
  console.log('operationlength', operation.length)
  console.log('result', result)
})

const calculation = () => {
  const numberDisplay = buttonDisplayFunction(buttonsArray)
  const operatorOptions = operatorEvents(operatorArray)
  const numberButton = numberEvents(buttonsArray)

  return numberDisplay, operatorOptions, numberButton
}

calculation()

let addMemoryButton = document.getElementById('addMemory')

addMemoryButton.addEventListener('click', () => {
  memory.textContent = memoryHolder
})

//
