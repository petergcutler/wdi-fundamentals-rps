'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || "getInput()".return;
}

function getComputerMove(move) {
    return move || "randomPlay()".return;
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === "rock" && computerMove === "paper") {
      winner = "computer";
    } else if (playerMove === "rock" && computerMove === "scissors") {
      winner = "player";
    } else if (playerMove === "rock" && computerMove === "rock") {
      winner = "tie";
    } else if (playerMove === "paper" && computerMove === "scissors") {
      winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
      winner = "player";
    } else if (playerMove === "paper" && computerMove === "paper") {
      winner = "tie";
    } else if (playerMove === "scissors" && computerMove === "rock") {
      winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
      winner = "player";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
      winner = "tie";
    }
    return winner;
}


function playTo(num) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var x = 0;

    for (x = 0; x < num; x += 1) {

    var playerValue = getPlayerMove(getInput());
    var computerValue = getComputerMove(randomPlay());
    var result = getWinner(playerValue, computerValue);

    if (result === "player") {
        playerWins += 1;
    } else if (result === "computer") {
        computerWins += 1;
    } else {
        console.log("tie");
    }

    console.log('Player chose ' + playerValue + ' while Computer chose ' + computerValue + " ... the winner is " + result);

    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

playerValue = null;
computerValue = null;
result = null;

}
    return [playerWins, computerWins];
}

playTo(8);
