let number = prompt("Guess A Number Between 1-100");
if (number < 25) {
    document.write("Less Than 25");
} else if (number >= 25 && number < 50) {
    document.write("Between 25 and 50");
} else if (number >= 50 && number < 75) {
    document.write("Between 50 and 75");
} else if ( number >= 75 && number <=100) {
    document.write("Between 75 and 100");
} else {
    document.write("whatever")
}
