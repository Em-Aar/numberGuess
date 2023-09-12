//Number Guess
//Computer generates random number -- math.random
//We have to guess that number -- prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let min = parseInt(prompt("Enter minimum range: "));
let max = parseInt(prompt("Enter maximum range: "));
let randNumber = Math.floor(Math.random() * (max - min) + min); // generates random number from 0 to ,.999
let guess = false;
while (!guess) {
    let userInput = parseInt(prompt("Guess your number: "));
    if (randNumber === userInput) {
        console.log("Great you guessed the number");
        guess = true;
    }
    else if (randNumber >= userInput) {
        console.log("your guessed number is less than random number");
    }
    else if (randNumber <= userInput) {
        console.log("your guessed number is greater than random  number");
    }
}
