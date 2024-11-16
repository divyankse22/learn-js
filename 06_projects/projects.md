# Projects

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ttcb5f?file=4-GuessTheNumber%2Fchaiaurcode.js,4-GuessTheNumber%2Findex.html)


## Project 1 : Color Changer

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    const clickarea = e.target.id;
    switch(clickarea){
      case 'grey' : 
        body.style.backgroundColor = 'grey';
        break;
      case 'white' : 
        body.style.backgroundColor = 'white';
        break;
      case 'yellow' : 
        body.style.backgroundColor = 'yellow';
        break;
      case 'blue' :
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});

```

## Project 2 : BMI Generator

```javascript

const forms = document.querySelector('form');

forms.addEventListener('submit', function(e) {
  e.preventDefault();
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');

  // Convert height and weight to numbers for validation and calculation
  height = parseFloat(height);
  weight = parseFloat(weight);

  if (height === '' || height <= 0 || isNaN(height)) { // Corrected condition
    results.innerHTML = "Please give a valid height";
  } else if (weight === '' || weight <= 0 || isNaN(weight)) { // Corrected condition
    results.innerHTML = "Please give a valid weight";
  } else {
    height = height / 100; 
    let bmi = weight / (height * height);
    results.innerHTML = bmi.toFixed(1);
  }
});

```

## Project 3: Digital Clock 

```javascript

const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.textContent = date.toLocaleTimeString(); 
}, 1000);

```

## Project 4: Guess The Number

```javascript

const form = document.querySelector('.form');
const remainingGuesses = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const submit = document.querySelector('#subt')
let lowOrHi = document.querySelector('.lowOrHi');
let randomNum = parseInt(Math.random()*100 + 1)
let userInput = document.querySelector('#guessField');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let numGuesses = 0;
let playGame = true;

if(playGame){
  form.addEventListener('submit' ,function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if(!validateGuess(guess)){
      return;
    }
    numGuesses++;
    displayGuess(guess);
    if (numGuesses>=10){
      displayMessage(`Game Over !! The Random Number was ${randomNum}`)
      endGame();
    }
    else{
      checkGuess(guess);
    }
  });
}

function validateGuess(guess){
  if(isNaN(guess)||guess<0||guess>100){
    alert("Please provide a valid number between 1 and 100");
    return false;
  }
  return true;
}
function checkGuess(guess){
  if(guess===randomNum){
    displayMessage(`You guessed it right !!`);
    endGame();
  }
  else if(guess>randomNum){
    displayMessage(`Guess was too high. Try Again!`);
  }
  else{
    displayMessage(`Guess was too low. Try Again!`);
  }
}

function displayMessage(message){
  lowOrHi.innerHTML = `${message}`;
}

function displayGuess(guess){
  userInput.value = ''
  if(numGuesses==10){
    guessSlot.innerHTML += `${guess}`;
  }
  else{
    guessSlot.innerHTML += `${guess}, `;
  }
  remainingGuesses.innerHTML = 10-numGuesses;
}

function newGame(){
  const newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click',function(e){
    randomNum = parseInt(Math.random()*100 + 1);
    numGuesses = 0;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = 10-numGuesses;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'> Start New Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

```
