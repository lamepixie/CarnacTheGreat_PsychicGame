
var wins = 0;
var losses = 0;
var guesses = 9;
var picked = []; // array to push user choices to
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
    
    var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)]; //computer selects random letter
    picked.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == computerGuess) {
        wins++;
        alert('Way to go! You\'ve guesesed corrrectly. You Won!');
        guesses = 9; //reseting the guesses back to 9 so that the user can play again
        picked.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guesses == 0){
        losses++;
        alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
        guesses = 9;
        picked.length = 0;
    }
    else if (userGuess !== computerGuess){
        guesses--; //decrementing the guesses left
    }  
    // Taking the tallies and displaying them in HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guesses + 
    "</p>" +
    "<p>Your Guesses so far: " +
    picked +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
