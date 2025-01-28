let randNum = parseInt(Math.random()*100+1);

const submitButton = document.querySelector('#submitguess')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#pGuess')
const lastResult = document.querySelector('#remGuess')

const lowOrhigh = document.querySelector('.lowHigh')
const startAgain = document.querySelector('.result')

const para = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true

if (playGame) {
	submitButton.addEventListener( 'click', function (e) {
		e.preventDefault();
		const guess = parseInt(userInput.value)
		console.log(guess);
		validateGuess(guess)
	});

}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert('Please enter a valid number.')
	} else if (guess < 1){
		alert('Please enter a number more than 1.')
	} else if (guess > 100) {
		alert('Please enter a number less than 100.')
	} else {
		prevGuess.push(guess)
		if(numGuess === 10){
			dispGuess(guess)
			dispMsg(`Game Over. Random number was ${randNum}.`)
			endGame()
		} else {
			dispGuess(guess)
			checkGuess(guess)
		}
	}
}
function checkGuess(guess) {
	if(guess === randNum){
		dispMsg(`You guessed it right !`)
		endGame();
	} else if (guess <= randNum) {
		dispMsg(`Number is TOOO low !`)
		
	} else if (guess >= randNum) {
		dispMsg(`Number is TOOO high. !`)
		
	}
}

function dispGuess(guess) {
	userInput.value = ''
	guessSlot.innerHTML += ` ${guess} ,  `
	numGuess ++ ;
	let remainingGuess = document.querySelector('#remGuess span')
	remainingGuess.innerText = `${11- numGuess}`
}

function dispMsg(message) {
	lowOrhigh.innerHTML = `<h2>${message}</h2>`	
}

function endGame(button) {
	userInput.value = ''
	userInput.setAttribute('disabled' , '')
	para.classList.add('button')
	para.innerHTML = `<h2 id = 'newgame'>Start New Game.</h2>`
	startAgain.appendChild(para)
	playGame = false
	newGame();
	
}

function newGame() {
	const newGamebutton = document.querySelector('#newgame')
	newGamebutton.addEventListener('click', function(e) {
		randNum = parseInt(Math.random() * 100 + 1);
		prevGuess = []
		numGuess = 1
		guessSlot.innerHTML = ``
		document.querySelector('#remGuess span').innerText = `10`
		userInput.removeAttribute('disabled')
		startAgain.removeChild(para)
		guessSlot.innerText = 'Previous Guesses : '
		lowOrhigh.innerHTML = ''
		playGame = true ;
	})
}