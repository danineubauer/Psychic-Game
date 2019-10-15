
        //pseudo code: 

        //Computer options: 

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        //variables to hold counts: 

        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessesSoFar = 0;

        //variables to hold referances to places that hold text: 

        var directionsText = document.getElementById("directions-text");
        var chooseWiselyText = document.getElementById("chooseWisely");
        var clickToGuessBtn = document.getElementById("clickToGuess");
        var userGuessText = document.getElementById("userGuessed");
        var computerGuessText = document.getElementById("computerGuess");
        var winsText = document.getElementById("wins");
        var lossesText = document.getElementById("losses");
        var guessesLeftText = document.getElementById("guessesLeft");
        var guessesSoFarText = document.getElementById("guessesSoFar");

        //function that is run when a user presses a key: 


        clickToGuessBtn.addEventListener("click", function (event) {
            directionsText.textContent = "Choose a letter! You have 10 guesses...";
            document.getElementById("clickToGuess").style.visibility = "hide";
            this.style.display = "none";

        });


        document.onkeyup = function (event) {
            var userGuess = event.key;
            var computerGuess = letters[Math.floor(Math.random() * letters.length)];


            if (userGuess === computerGuess) {
                wins++;
            } else {
                losses++;
                guessesSoFar++;
                guessesLeft--;
            }

            userGuessText.textContent = userGuess;
            computerGuessText.textContent = computerGuess;

            document.getElementById("choices").style.visibility = "visible";

            winsText.textContent = wins;
            lossesText.textContent = losses;
            guessesSoFarText.textContent = guessesSoFar;
            guessesLeftText.textContent = guessesLeft;

        };
