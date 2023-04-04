// do 11 + 2 next

const buttonEvents = document.querySelectorAll('[data-button]')
const twobuttons = document.querySelectorAll('row-two')
const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')

const display = document.getElementById('numberDisplay')
let firstDigitArray = []
let secondDigitArray = []

const buttonsArray = [...buttons]
const operatorArray = [...operators]
let first = ''
let second = ''

let operation = ''

// display functions

const buttonDisplayFunction = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      let numberDisplay = (display.textContent = button.value)
      numberDisplay
      // if ((operation = [] && digitArray.length > 0)) {
      // display.textContent = firstDigitArray.join('')
      // }
    })
  })
}

// perform equations

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      if (operation.length === 1) {
        secondDigitArray.push(button.value)
      } else {
        firstDigitArray.push(button.value)
      }

      display.textContent = firstDigitArray.join('')
      if (operation.length === 1 && firstDigitArray.length > 0) {
        display.textContent = secondDigitArray.join('')
      }
      console.log('firstDigitArray', firstDigitArray)
    })
  })
}

const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      // if numberArray is more than one index then join them together

      display.textContent = ''
      if (operation != []) operation = []
      operation = operator.value
      console.log('operation', operation)
      // console.log(firstDigitArray.join(''), 'joined array')
    })
  })
}

const equalButton = document.getElementById('equal-btn')

equalButton.addEventListener('click', () => {
  if (firstDigitArray.length > 1) {
    firstDigitArray.join('')
  }
  console.log('array', firstDigitArray, secondDigitArray)
  let equation = []

  if (operation === '+') {
    display.textContent =
      Number(firstDigitArray.join('')) + Number(secondDigitArray.join(''))
  }
  if (operation === '-') {
    display.textContent =
      Number(firstDigitArray.join('')) - Number(secondDigitArray.join(''))
  }
  if (operation === '*') {
    display.textContent =
      Number(firstDigitArray.join('')) * Number(secondDigitArray.join(''))
  }
  if (operation === '/') {
    display.textContent =
      Number(firstDigitArray.join('')) / Number(secondDigitArray.join(''))
  }
  firstDigitArray = []
  secondDigitArray = []
  operation = ''
  console.log(display, 'display')
})

const calculation = () => {
  const numberDisplay = buttonDisplayFunction(buttonsArray)
  const operatorOptions = operatorEvents(operatorArray)
  const numberButton = numberEvents(buttonsArray)

  return numberDisplay, operatorOptions, numberButton
}

calculation()

// equals event listener

// const displaySequence = () => {
// let displayString = ''
// displayString =  Number(input)
// }

// // if(!(displaySequence.include(operator) ){
//   return endefined
// }
//   if(displaySequence[0] === equals(operator)){
// return undefined
//   }
