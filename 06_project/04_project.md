# project related to DOM

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project code
```javascript
const submit = document.querySelector('#subt')
console.log(submit)
const guessField = document.querySelector('.guessField')
console.log(guessField)
let random = Math.round((Math.random()*100)+1)
console.log(random)
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
let prevGuess = []
let numGuess = 10
let playGame = true
const p = document.createElement('p')
const startOver = document.querySelector('.resultParas')

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    
    const guessNumber = parseInt(guessField.value)
    console.log(guessNumber)
    validateGuessNumber(guessNumber)
  })
}



function validateGuessNumber(guessNumber){
    if(guessNumber < 1 || isNaN(guessNumber) || guessNumber>100 || guessNumber === '')
      alert('Please enter a valid number')
    else{
      prevGuess.push(guessNumber)
      if(numGuess == 1){
        displayGuess(guessNumber)
        displayMessage(`Game over. Random number was ${random}`)
        endGame()
      }else{
        displayGuess(guessNumber)
        checkGuess(guessNumber)
      }
    }
}
function checkGuess(guessNumber){
  if(guessNumber === random){
    displayMessage('you won.you guessed it right')
    endGame()
  }else if(guessNumber < random){
    displayMessage('number is low')
  }else if(guessNumber < random){
    displayMessage('number is high')
  }
}
function displayGuess(guess){
  guessField.value=''
  guesses.innerHTML = `${prevGuess}`
  numGuess--
  remaining.innerHTML = `${numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h2>`
}
function endGame(){
  guessField.value=''
  guessField.setAttribute('disabled','')
  p.innerHTML = '<h2 id="newGame">Start new game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(){
  const newGame = document.querySelector('#newGame')
  newGame.addEventListener('click',function(e){
    random = Math.round((Math.random()*100)+1)
    prevGuess = []
    numGuess = 10
    guesses.innerHTML = `${prevGuess}`
    remaining.innerHTML = `${numGuess}`
    lowOrHi.innerHTML = " "
    guessField.removeAttribute('disabled','')
    startOver.removeChild(p)
    playGame = true
  })
}
```