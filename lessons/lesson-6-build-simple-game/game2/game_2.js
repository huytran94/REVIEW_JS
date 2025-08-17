/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

/**
 * min = 1, max = 10
 *
 * generate a random number between min and max
 *
 * get user's number as prompt
 *
 * store number of attempt
 *
 * compare user's input with random number
 *
 * if higher or lower, inform user and tell them to input again. => Loop ?
 *
 * Show number of attempt
 *
 * Ask if user want to play again ?
 */

const MIN_NUMB = 1;
const MAX_NUMB = 10;

let checkRunAgain = (gameFunc, message = "") => {
  if (message.trim().length === 0) {
    message = "Thanks for playing the game ! See you next time";
  }
  let continueChoicePrompt = prompt("Do you want to continue ? (Y/N): ");
  if (
    continueChoicePrompt.toLocaleLowerCase() === "yes" ||
    continueChoicePrompt.toLocaleLowerCase() === "y"
  ) {
    gameFunc();
  } else {
    console.log(message);
  }
};

let getUserPrompt = (promptMessage) => {
  let userPrompt = prompt(promptMessage);
  let userChoice = parseInt(userPrompt);

  return userChoice;
};

function runGuessTheNumber() {
  const secretNumber = Math.floor(Math.random() * MAX_NUMB) + 1;

  let userAttempts = 0;
  let userGuessNumber = null;

  console.log("Welcome to the number guessing game!");
  console.log("Please guess a number between 1 and 10");

  while (userGuessNumber !== secretNumber) {
    userGuessNumber = getUserPrompt("Enter your guess number: ");
    // let userPrompt = prompt("Enter your guess number: ");
    // userGuessNumber = parseInt(userPrompt);

    if (
      isNaN(userGuessNumber) ||
      userGuessNumber < MIN_NUMB ||
      userGuessNumber > MAX_NUMB
    ) {
      console.log(
        `Invalid input! Please input a number between ${MIN_NUMB} and ${MAX_NUMB}`
      );

      continue;
    }
    userAttempts++;

    if (userGuessNumber < secretNumber) {
      console.log("Too low! Try again");
    } else if (userGuessNumber > secretNumber) {
      console.log("Too high! Try again");
    } else {
      console.log(
        `Congrats! You guess the number ${secretNumber} correct after ${userAttempts} attempt`
      );

      break;
    }
  }

  checkRunAgain(runGuessTheNumber);
}

runGuessTheNumber();
