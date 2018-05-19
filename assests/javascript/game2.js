window.onload = function () {
    var bandNames =
        ["Paramore",
            "Jimmy Eat World",
            "Fall Out Boy",
            "Chiodos",
            "Yellow Card",
            "NoFX",
            "Weezer",
            "The Offspring"];
    console.log(bandNames);

    var word = bandNames[Math.floor(Math.random() * bandNames.length)];
    var allowedGuesses = 13;
    var wrongGuesses = [];
    var correctGuesses = [];
    console.log(word);

    function initializeGame() {
        for (var i = 0; i < word.length; i++) {
            correctGuesses.push('_');
        console.log(correctGuesses);
        }
        document.getElementById("#bandName").innerHTML = correctGuesses(' ');
        document.getElementById("#mylives").innerHTML = allowedGuesses;
        // var userChoice = event.key;
        // console.log(userChoice);
        document.onkeyup = function (event) {



            function updateGuesses(letter) {
                allowedGuesses--;
                document.getElementById("#mylives").innerHTML = allowedGuesses;
                var userChoice = event.key;
                console.log(userChoice);
                if (word.indexOf(letter) === -1) {
                    wrongGuesses.push(letter);
                    document.getElementById("#guessedLetters").innerHTML = wrongGuesses.join(', ');
                } else {
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === letter) {
                            correctGuesses[i] = letter;
                        }
                    }

                    document.getElementById("#bandName").innerHTML = correctGuesses.join(' ');
                }
            }
            
            function checkWin() {
                if (correctGuesses.indexOf('_') === -1) {
                    alert('You Won!');
                    // play song
                } else if (allowedGuesses === 0) {
                    alert('You Lost!');
                    // play sad trumbone
                }
        }
    }
    }
}
//add reset button
// document.getElementById('reset').onclick = function () {
    //     correct.parentNode.removeChild(correct);
    //     letters.parentNode.removeChild(letters);
    //     showClue.innerHTML = "";
    //     context.clearRect(0, 0, 400, 400);
    //     play();
    // onkeyup = 
