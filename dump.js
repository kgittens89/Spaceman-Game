function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
}



document.getElementsByClassName(
    `word${wordIndex}`
    ).style.visibility = 'visible';
    
    function getRandomNumber(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(getRandomNumber(1, 8));
    
    let word = document.querySelector(`[class='word${0}']`);
    
    
    
    let wordIndexHunt = wordArr.map((element) =>
    element.indexOf(letterInput)
    );
    console.log(wordIndexHunt);
    let wordIndex = wordArr.filter((element) =>
    element.indexOf(letterInput)
    );
    console.log(wordIndex);
    
    
    // wordArr.splice(`${wordIndex}`, 1)
    // console.log(wordArr)



function checkIfLoser() {
	if (imgIndex >= 9) {
		alert('you lost');
	}
}


setTimeout(openModal, 1500);