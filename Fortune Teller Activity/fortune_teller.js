// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
const fortune = Math.floor(Math.random() * 11);
//const user_input = parseInt(prompt("Pick a number 0-10:"));
//let fortune = user_input;
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.
console.log("Fortune Selecter: " + fortune);
// YOUR CODE GOES HERE
if (fortune >= 0 && fortune <= 3) {
    console.log("You have a low fortune.");
} else if (fortune >= 4 && fortune <= 7) {
    console.log("You have an average fortune.");
} else if (fortune >= 8 && fortune <= 10) {
    console.log("You have a great fortune.");
} else {
    console.log("The fortune can't be read correctly (out of range).");
}



// Determine the fortune category

