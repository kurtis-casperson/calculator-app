// do 11 + 2 next

const buttonEvents = document.querySelectorAll('[data-button]')
const twobuttons = document.querySelectorAll('row-two')
const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')

const display = document.getElementById('numberDisplay')
let equationArray = []

const buttonsArray = [...buttons]
const operatorArray = [...operators]

// display functions

const buttonDisplayFunction = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      display.textContent = button.value
    })
  })
}

// perform equations
let first = ''
let second = ''
let firstOperator = equationArray[0]
let secondOperator = equationArray[1]
let operation = []

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      equationArray.push(button.value)
      console.log(equationArray, 'equation-array')
    })
  })
}

const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      if (operation != []) operation = []
      operation.push(operator.value)
      console.log(operation, 'operation')
    })
  })
}

const equalButton = document.getElementById('equal-btn')

equalButton.addEventListener('click', () => {
  console.log(equationArray, 'array')
  let equation = []

  if (operation[0] === '+') {
    display.textContent = Number(equationArray[0]) + Number(equationArray[1])
  }
  if (operation[0] === '-') {
    display.textContent = Number(equationArray[0]) - Number(equationArray[1])
  }
  if (operation[0] === '*') {
    display.textContent = Number(equationArray[0]) * Number(equationArray[1])
  }
  if (operation[0] === '/') {
    display.textContent = Number(equationArray[0]) / Number(equationArray[1])
  }
  equationArray = []
  operation = []
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
