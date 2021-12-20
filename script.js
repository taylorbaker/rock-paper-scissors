// initialize score counters

let playerScore = computerScore = 0;

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

// Add click event listeners to player choice images

const images = document.querySelectorAll('img');
const roundResultPara = document.querySelector('p');
const scorePara = roundResultPara.nextElementSibling;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    let playerPlay = '';

    if (i === 0) playerPlay = 'Rock';
    else if (i === 1) playerPlay = 'Paper';
    else if (i === 2) playerPlay = 'Scissors';

    let result = playRound(playerPlay, computerPlay());
    roundResultPara.textContent = result;
    console.log(result);
    printScore();
    checkWin();
  });
}

// logic behind result statement from player and computer plays

function playRound(playerSelection, computerSelection) {
  if (playerSelection  === computerSelection)
    return 'Draw! Play again!';
  else if (playerSelection === 'Rock' && computerSelection === 'Paper' ) {
    computerScore += 1;
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors' ) {
    computerScore += 1;
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ) {
    computerScore += 1;
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ) {
    playerScore += 1;
    return 'You win! Rock beats Scissors!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock' ) {
    playerScore += 1;
    return 'You win! Paper beats Rock!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper' ) {
    playerScore += 1;
    return 'You win! Scissors beats Paper!';
  } else
    return 'How did that happen?...';
}

// check if game over

function checkWin() {
  if (playerScore >= 5) { // player wins at 5
    console.log('You win the game!!');
    roundResultPara.textContent = 'You win the game!!';
    playerScore = computerScore = 0;
  } else if (computerScore >= 5) { // computer wins at 5
    console.log('You lose the game :(');
    roundResultPara.textContent = 'You lose the game :(';
    playerScore = computerScore = 0;
  }
}

// helper to display current score

function printScore() {
  let scoreStr = 'Player ' + playerScore + ' - ' + computerScore + ' Computer';
  console.log(scoreStr);
  scorePara.textContent = scoreStr;
}

