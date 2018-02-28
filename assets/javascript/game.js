// Computer's choices
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

        // Variables to be affected by gameplay
        var wins = 0;
        var loss = 0;
        var guesses = 9;
        var guessesLeft = 9;
        var picked = [];
        var availLetters = null;

        // Carnac selects random letter from the alphabet
        var carnacGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

        //  Decrease counter for remaining guesses
        var decreaseGuessesLeft = function() {
        document.querySelector('#guessesLeft').innerHTML = "Guesses remaining: " + guessesLeft;
        };



        var updateLetterToGuess = function() {
        this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
        };
        var updateGuessesSoFar = function() {
        // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
        document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
        };
        // Function will be called when we reset everything
        var reset = function() {
        totalGuesses = 9;
        guessesLeft = 9;
        guessedLetters = [];

        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
        }

        updateLetterToGuess();
        updateGuessesLeft();



        // Tracks user's guess of Carnac's letter
        document.onkeyup = function(event) {
        guessesLeft--;
        var usersGuess = String.fromCharCode(event.keyCode).toLowerCase();

        picked.push(usersGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

            if (guessesLeft > 0){
                if (usersGuess == carnacGuess){
                    wins++;
                    document.querySelector('#wins').innerHTML = "Wins: " + wins;
                    alert("");
                    reset();
                }
            }else if(guessesLeft == 0){
                losses++;
                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                alert("");
                reset();
            }
    };
    








