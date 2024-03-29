#! /usr/bin/env node
import inquirer from "inquirer";

//Targets:
//1) Computer will generate random number.
//2) Take input from user as a guesser
//3) Compare comp number with user input number then show a result

const randomNumber = Math.floor(Math.random()*10 + 1); //random generate values between 0.0 - 0.9
                                                //we used floor for rounding off

const answer = await inquirer.prompt([
  {
    message: "Guess the number [ 1 - 10] : ",
    type: "number",
    name: "UserGuess",
  },
]);

if (answer.UserGuess === randomNumber) {
  console.log("<____YEY ! Right Guess Dude____>");
} else {
  console.log("Oh ! Wrong Guess");
}
