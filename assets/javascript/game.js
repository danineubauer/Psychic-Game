
        //pseudo code: 

        //Computer options: 

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        //variables to hold counts: 

        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessesSoFar = 0;
        var yourGuesses = 10;

        //variables to hold referances to places that hold text: 

        var directionsText = document.getElementById("directions-text");
        var chooseWiselyText = document.getElementById("chooseWisely");
        var clickToGuessBtn = document.getElementById("clickToGuess");
        var playAgainBtn = document.getElementById("playAgain");
        var userGuessText = document.getElementById("userGuessed");
        var computerGuessText = document.getElementById("computerGuess");
        var winsText = document.getElementById("wins");
        var lossesText = document.getElementById("losses");
        var guessesLeftText = document.getElementById("guessesLeft");
        var guessesSoFarText = document.getElementById("guessesSoFar");
        


        //function that is run when a user presses button: 

        clickToGuessBtn.addEventListener("click", function (event) {
            directionsText.textContent = "Choose a letter! You have " + yourGuesses + " guesses...";
            document.getElementById("clickToGuess").style.visibility = "hide";
            this.style.display = "none";
        });

        playAgainBtn.addEventListener("click", function (event) {
            document.getElementById("playAgain").style.visibility = "visible";
            this.style.display = "visible";
        });
 

        document.onkeyup = function (event) {
            var userGuess = event.key;
            var computerGuess = letters[Math.floor(Math.random() * letters.length)];

            if (yourGuesses > 0) { 
                if (userGuess === computerGuess) {
                    wins++;
                } else {
                    losses++;
                    guessesSoFar++;
                    guessesLeft--;
                    yourGuesses--;
                };
            } else { 

            };

            document.getElementById("choices").style.visibility = "visible";
            
            directionsText.textContent = "Choose a letter! You have " + yourGuesses + " guesses...";
            userGuessText.textContent = userGuess;
            computerGuessText.textContent = computerGuess;


            winsText.textContent = wins;
            lossesText.textContent = losses;
            guessesSoFarText.textContent = guessesSoFar;
            guessesLeftText.textContent = guessesLeft;

        };
