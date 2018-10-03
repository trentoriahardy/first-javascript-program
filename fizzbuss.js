let number = prompt("What's the first number we should check");
if (number % 15 === 0) {
    document.write("Fizz Buzz")
} else if (number % 3 === 0 ) {
    document.write("Fizz");
} else if (number % 5 === 0) {
    document.write("Buzz");
} else {
    document.write(number)
}

//1. Ask for a user's name 
//2. Determine if the users name has an even or odd number of characters
//3. Say even or odd