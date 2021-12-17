// use random() to determine computer play

function computerPlay() {
  let roll = Math.floor(Math.random() * 3);
  if (roll === 0)
    return 'Rock';
  else if (roll === 1)
    return 'Paper';
  else
    return 'Scissors';
}

// use regex and prompt() to get player play

function playerPlay() {
  const rockReg = /rock/i;
  const paperReg = /paper/i;
  const scissorsReg = /scissors/i;

  const rawResult = window.prompt('Name your play:', 'e.g. Rock');
  if (rockReg.test(rawResult))
    return 'Rock';
  else if (paperReg.test(rawResult))
    return 'Paper';
  else if (scissorsReg.test(rawResult))
    return 'Scissors';
  else
    console.log('Please provide a valid entry.');
}

// logic behind result statement from player and computer plays

function playRound(playerSelection, computerSelection) {
  if (playerSelection  === computerSelection)
    return 'Draw! Play again!';
  else if (playerSelection === 'Rock' && computerSelection === 'Paper' )
    return 'You lose! Paper beats Rock';
  else if (playerSelection === 'Paper' && computerSelection === 'Scissors' )
    return 'You lose! Scissors beats Paper';
  else if (playerSelection === 'Scissors' && computerSelection === 'Rock' )
    return 'You lose! Rock beats Scissors';
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors' )
    return 'You win! Rock beats Scissors!';
  else if (playerSelection === 'Paper' && computerSelection === 'Rock' )
    return 'You win! Paper beats Rock!';
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper' )
    return 'You win! Scissors beats Paper!';
  else
    return 'How did that happen?...';
}

// game logic 

function game() {
  let playerScore = computerScore = 0;
  const winReg = /^You win/;
  const loseReg = /^You lose/;
  const drawReg = /^Draw/;

  console.log('New game!');
  printScore(playerScore, computerScore);
  for (let i = 0; i <= 9; i++) { // best of 9
    if (playerScore >= 5) { // player wins at 5
      console.log('You win the game!!');
      break;
    } else if (computerScore >= 5) { // computer wins at 5
      console.log('You lose the game :(');
      break;
    } else {
      let result = playRound(playerPlay(), computerPlay());
      if (winReg.test(result)) {
	console.log(result);
        playerScore++;
        printScore(playerScore, computerScore);
      } else if (loseReg.test(result)) {
        console.log(result);
	computerScore++;
        printScore(playerScore, computerScore);
      } else {
        console.log(result);
	printScore(playerScore, computerScore);
        // reset index by 1 for 'draw' condition
	i--;
      }
    }
  }
}

// helper to display current score

function printScore(pS, cS) {
  console.log('Player ' + pS + ' - ' + cS + ' Computer');
}

// formal call to begin game 

game();
