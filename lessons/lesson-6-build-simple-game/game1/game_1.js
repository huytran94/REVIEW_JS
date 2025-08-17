/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

/**
 * My own assumptions:
 * 1. We have to get input from user when he/she type in.
 * 2. The computer's selection must be a random selection.
 * 3. Compare user's selection with computer's selection.
 * 4. Announce winner.
 * 5. Ask if user want to play again or simply quit ?
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

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
  let userChoice = userPrompt.toLowerCase();

  return userChoice;
};

let getComputerChoice = () => {
  let computerChoice;

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
};

let main = () => {
  console.log("The Rock 🪨, Paper 🧻, or Scissors ✂️ Game");

  let userChoice = getUserPrompt("Enter Rock 🪨, Paper 🧻, or Scissors: ");
  let computerChoice = getComputerChoice();

  // print out what we choose and what computer choose:
  console.log("User choose: ", userChoice);
  console.log("Computer choose: ", computerChoice);

  // check condition win/lose/tie the game
  let userWinCondition =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock");
  let computerWinCondition =
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock");
  let tieCondition = userChoice === computerChoice;
  if (tieCondition) {
    console.log("Tie game");
  } else if (userWinCondition) {
    console.log("User win the game, yay!!");
  } else if (computerWinCondition) {
    console.log("Computer win the game, yay!!");
  } else {
    console.log(
      "Please check the input, we don't understand what you just typed in!"
    );
  }

  checkRunAgain(main);
};

main();
