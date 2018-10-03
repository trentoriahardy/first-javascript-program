let userGuess = parseInt(prompt("Guess a number between 1-10"));
let randomNumber = parseInt(Math.random * 10);

while(userGuess != randomNumber) {
    alert("guess again")
    userGuess = parseInt(prompt("Guess a number between 1-10"));
}
alert("right! ;)")