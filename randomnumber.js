userInput = prompt("Guess a number between 1-10");
let random = Math.floor(Math.random() * 10) + 1;;

if (userInput === random ) {
    document.write("Yes Indeed");
}

else if (userInput != random) {
    document.write("Nah bro");
} 
alert(random);

parseInt(prompt("Hello"));