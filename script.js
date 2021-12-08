/*----- constants -----*/
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


/*----- app's state (variables) -----*/
let wordArr = [];
let wordToGuess;

/*----- cached element references -----*/
const howToPlayBtn = document.querySelector('.how-to-play');
const letterInput = document.querySelector('#letter-input');
const inputGroupBtns = document.querySelector('.input-section')
const guessBoard = document.querySelector('.guessing-board');
const previousGuesses = document.querySelector('.guessed-letters');
const spaceshipImgs = document.querySelectorAll('.spaceship-images img');


/*----- event listeners -----*/
inputGroupBtns.addEventListener('click', seperateWordInput)

/*----- functions -----*/

function seperateWordInput(event) {
    if (event.target.classList.contains('submit-word-to-guess')) {
       wordToGuess = document.querySelector('#word-to-guess');
        console.log('clicked');
        wordArr = wordToGuess.value.toUpperCase().split('');
        console.log(wordArr);
        displayEmptyBoard()
        wordToGuess.value = '';
    }
}


function displayEmptyBoard() {
    for (let i = 0; i < wordArr.length; i++) {
        let spanEl = document.createElement('span');
        spanEl.innerText = wordArr[i];
        guessBoard.appendChild(spanEl);
    }
};

