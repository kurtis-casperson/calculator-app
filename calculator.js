// when a number button is clicked is it added to an empty variable

// when a operator is clicked the text box becomes empty and the next number can be input
// clicking multiple operators.. the last operator clicked is the one used.
// that will run when the = button is clicked
// the clear button will remove the numbers from the variable

const buttonEvents = document.querySelectorAll('[data-button]')
const twobuttons = document.querySelectorAll('row-two')
const buttons = document.getElementsByClassName('number-btn')
const operators = document.getElementsByClassName('operator-btn')
const equalButton = document.getElementById('equal-btn')
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

const numberEvents = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      equationArray.push(button.value)
      let value = button.value
      console.log(value)
      return value
      // equationArray.push(button.value)

      // add nubmer or decimal to the equationString
    })
  })
}

const operatorEvents = (operatorArray) => {
  operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => {
      equationArray.push(operator.value)
      let value = operator.value
      console.log(value)
      return value
      // equationArray.push(operator.value)
      console.log(operator.value)
      // add operator to equationString
      // if equationString begins [0] with an operator, then remove the operator from the string
    })
  })
}

const equationOptions = (equationArray) => {
  equalButton.addEventListener('click', () => {
    console.log(equationArray)
  })
}

const calculation = () => {
  const numberDisplay = buttonDisplayFunction(buttonsArray)
  const operatorOptions = operatorEvents(operatorArray)
  const numberButton = numberEvents(buttonsArray)
  const equationresult = equationOptions(equationArray)

  return numberDisplay, operatorOptions, numberButton, equationresult
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

// const pressButtons = (buttonsArray) => {
//   // debugger
//   buttonsArray.forEach((button) => {
//     // buttons.addEventListener('click', () => {
//     console.log('button')
//     display.textContent = button.value
//     console.log(button.value)
//     // })
//   })
// }
// buttons.addEventListener('click', calculation)

// const mapOperators = operatorArray.map(function (operator) {
//   operator.addEventListener('click', () => {
//     display.textContent = operator.value
//     console.log(operator.value, 'maparray')
//   })
// })
