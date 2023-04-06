const buttonEvents = document.querySelectorAll('[data-button]')
const twobuttons = document.querySelectorAll('row-two')
const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')
const displayResult = document.getElementById('numberDisplay')
const memory = document.getElementById('memoryDisplay')

const buttonsArray = [...buttons]
const operatorArray = [...operators]
let firstDigitArray = []
let secondDigitArray = []
let operation = ''
let memoryHolder = ''

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
  displayResult.textContent = ''
  firstDigitArray = []
  secondDigitArray = []
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
// 1. error:  When firstdigitarray contains a decimal, then a decimal can not be added to seconddigitarray
// 2. need conditional when operator is pressed first, before a number
// 3. after equal is pressed , need to be able to continue operations.  Clear the array
//4. Add memory

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      // debugger
      if (firstDigitArray.includes('.') && button.value === '.') {
        !firstDigitArray.push('.')
      }

      if (secondDigitArray.includes('.') && button.value === '.') {
        !secondDigitArray.push('.')
      }

      if (operation.length === 1) {
        secondDigitArray.push(button.value)
      } else {
        firstDigitArray.push(button.value)
      }

      displayResult.textContent = firstDigitArray.join('')
      if (operation.length === 1 && firstDigitArray.length > 0) {
        displayResult.textContent = secondDigitArray.join('')
      }
      console.log('firstDigitArray', firstDigitArray)
    })
  })
}

const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      if (operation != '' && firstDigitArray === []) {
        operation = ''
      }
      operation = operator.value
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
  // if (firstDigitArray.length > 1) {
  //   firstDigitArray.join('')
  // }
  console.log('array', firstDigitArray, 'secondDigitArray', secondDigitArray)

  if (operation === '+') {
    displayResult.textContent =
      Number(firstDigitArray.join('')) + Number(secondDigitArray.join(''))

    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '-') {
    displayResult.textContent =
      Number(firstDigitArray.join('')) - Number(secondDigitArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '*') {
    displayResult.textContent =
      Number(firstDigitArray.join('')) * Number(secondDigitArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  if (operation === '/') {
    displayResult.textContent =
      Number(firstDigitArray.join('')) / Number(secondDigitArray.join(''))
    memoryHolder += displayResult.textContent
    console.log('memoryHolder', memoryHolder)
  }
  console.log('firstDigitArray', firstDigitArray)
  firstDigitArray.length = 0
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
