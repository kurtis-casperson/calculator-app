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

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
  displayResult.textContent = ''
  firstOperandArray = []
  secondOperandArray = []
  operation = ''
  memoryHolder = ''
  addMemoryButton = ''
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
// 1. error:  if decimal is clicked twice, the display keeps a decimal point displayed, but the operation functions normally.
// 1.A - If operator is pressed and another number is added.. 2 + 2 + 2  ... need to be able to add the third , forth operands
// 2. need conditional when operator is pressed first, before a number
// 3. after equal is pressed , need to be able to continue operations.  Clear the array
//4. Add memory

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
        // if (firstOperandArray.length > 0) {
        displayResult.textContent = secondOperandArray.join('')
        // }
      }
      console.log('firstOperandArray', firstOperandArray)
    })
  })
}

// if an operator is selected FIRST then the operation string OR array should clear
const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      if (firstOperandArray.length === 0) {
        operation = operator.value
        if (operation.length === 1) {
          operation = ''
        }
      } else {
        operation = operator.value
        if (operation != '' && firstOperandArray === []) {
          operation = ''
        }
      }

      console.log('length', operation.length)
      console.log('operation', operation)
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
  console.log(
    'array',
    firstOperandArray,
    'secondOperandArray',
    secondOperandArray
  )

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
  firstOperandArray.length = 0
  console.log('firstOperandArray', firstOperandArray)
  console.log('firstOperandArray.length', firstOperandArray.length)
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
