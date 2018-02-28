        // Variables to be affected by gameplay
        var wins = 0;
        var loss = 0;
        var guesses = 9;
        var picked = [];
        // Computer's choices
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

        // User selects random letter from the alphabet
        document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Carnac selects random letter from the alphabet
        var carnacGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        picked.push(userGuess); 

       /* document.onkeyup = function(event) {
            var picked = String.fromCharCode(event.keyCode).toLowerCase();*/


            if (userGuess == carnacGuess){
                wins++;
                alert("You guessed what Carnac was thinking!");
                guesses = 9;
                picked.length = 0;
            }

            else if (guesses == 0) {
                loss++;
                alert("Sorry! Game over.");
                guesses = 9;
                picked.length = 0;
            }

            else if (userGuess !== carnacGuess){
                guesses--;
                alert("Guess again.")
            }
	
    var html = 
    "<p id='wins'>Wins: " + wins + "</p>" + 
    "<p id='losses'>Losses: " + loss + "</p>" + 
    "<p id='remaining'>Guesses remaining: " + guesses + "</p>" +
    "<p id='guessed'>Your guesses so far: " + picked + "</p>";

    document.querySelector("#game").innerHTML = html;
}








