/*----- constants -----*/
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


/*----- app's state (variables) -----*/
let wordToGuessInput;
let word;
let imgIndex = 0;
let wordIndex = [];
let wordArr = [];
let previousGuessedLetters = [];

/*----- cached element references -----*/
const inputGroupBtns = document.querySelector('.input-section')
const guessBoard = document.querySelector('.guessing-board');
const previousGuessesBoard = document.querySelector('.guessed-letters');
const spaceshipImgs = document.querySelectorAll('.spaceship-images img');
const winOrLose = document.querySelector('#win-or-lose')
const imgRows = document.querySelector('.row');

/*----- modal cached element references ----*/
const howToPlayBtn = document.querySelector('.how-to-play');
const modal = document.querySelector('#how-to-play-modal');
const closeBtn = document.querySelector('#close');


/*----- event listeners -----*/
inputGroupBtns.addEventListener('click', renderGame)
howToPlayBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal);


/*----- helper functions -----*/

// This article was referenced for the following function 
// https://www.tutorialspoint.com/find-and-return-array-positions-of-multiple-values-javascript
function findPositions(first, second) {
    first.forEach((element, index) => {
        if (second.includes(element)) {
            wordIndex.push(index)
        }
    })
};

function gameReset() {
    imgIndex = 0;
    guessBoard.innerText = '';
    previousGuessesBoard.innerText = '';
    winOrLose.innerText = '';
    wordArr = [];
    previousGuessedLetters = [];
    wordIndex = [];
    spaceshipImgs.forEach(element => element.style.visibility = 'hidden'); 
}

/*----- functions -----*/
function renderGame(event) {
    seperateWordInput(event);  
    checkLetterGuess(event);
};

function seperateWordInput(event) {
    if (event.target.classList.contains('submit-word-to-guess')) {
        gameReset();
        wordToGuessInput = document.querySelector('#word-to-guess');
        wordArr = wordToGuessInput.value.toUpperCase().split('');
        displayEmptyBoard();
        wordToGuessInput.value = '';
    }
};

function displayEmptyBoard() {
    for (let i = 0; i < wordArr.length; i++) {
        let spanEl = document.createElement('span');
        let pEl = document.createElement('p');
        pEl.innerText = wordArr[i];
        pEl.classList.add('letter-spread', `word${i}`);
        spanEl.appendChild(pEl);
        spanEl.classList.add('word-spread');
        guessBoard.appendChild(spanEl);
    }
};

function checkLetterGuess(event) {
    if (event.target.classList.contains('submit-input')) {
        const letterInput = document.querySelector('#letter-input');
        let letterInputValue = letterInput.value.toUpperCase();
        if (LETTERS.includes(letterInputValue)) {
            if (wordArr.includes(letterInputValue)) {
                findPositions(wordArr, letterInputValue);
                for (let i = 0; i < wordIndex.length; i++) {
                    word = document.querySelector(`.word${wordIndex[i]}`);
                    word.style.visibility = 'visible';
                }  
            } else {
                spaceshipImgs[imgIndex].style.visibility = 'visible';
                imgIndex++;
                checkIfLoser();
            }
            addToPreviouslyGuessed(letterInputValue);
            letterInput.value = '';
            checkIfWinner();
        } 
    } 
};

function addToPreviouslyGuessed(letter) {
    let spanEl = document.createElement('span');
    spanEl.classList.add('aside-text');
    if (!previousGuessedLetters.includes(letter)) {
        previousGuessedLetters.push(letter);
        spanEl.innerText = letter;
        previousGuessesBoard.append(spanEl);
    }
};

function checkIfLoser() {
    if (imgIndex >= 9) {
        winOrLose.innerText = `You lost! The word was ${wordArr.join('')}!`;
    }
}

function checkIfWinner() {
    if(wordArr.every(element => previousGuessedLetters.includes(element))) {
        winOrLose.innerText = "🏆 You've guessed the word! 🏆";
        winOrLose.style.color = '#4C96AF';
    }
}

/*----- Modal Functions -----*/
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
