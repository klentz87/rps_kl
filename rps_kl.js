var weapons = ['rock', 'paper', 'scissors'];
var playerOneVictories = 0;
var playerTwoVictories = 0;

while (playerOneVictories <= 3 && playerTwoVictories <= 3 ) {
// '<' instead of '<=' because these conditions are not checked until AFTER
// victories are tabulated, i.e. the loop will continue until one of the
// victories equals 4.
// Condition included to make code clearer -- because of the breaks on lines 49
// and 50 (when one player's victory tally has reached 3), you could just as
// easily set this to "true".
  var playerOne = prompt('Pick rock, paper, or scissors!');
  playerOne = playerOne.toLowerCase();
  console.log(`Player One has played ${playerOne}!`);
  var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var playerTwo = weaponOfChoice;
  console.log(`Player Two has played ${weaponOfChoice}!`);
  console.log('\n');
  if (playerOne === 'rock' && playerTwo === 'paper') {
      playerTwoVictories += 1;
      console.log('Player Two wins!');
  } else if (playerOne === 'rock' && playerTwo === 'scissors') {
      playerOneVictories += 1;
      console.log('Player One wins!');
  } else if (playerOne === 'paper' && playerTwo === 'scissors') {
      playerTwoVictories += 1;
      console.log('Player Two wins!');
  } else if (playerOne === 'paper' && playerTwo === 'rock') {
      playerOneVictories += 1;
      console.log('Player One wins!');
  } else if (playerOne === 'scissors' && playerTwo === 'rock') {
      playerTwoVictories += 1;
      console.log('Player Two wins!');
  } else if (playerOne === 'scissors' && playerTwo === 'paper') {
      playerOneVictories += 1;
      console.log('Player One wins!');
  } else if (playerOne === playerTwo) {
      console.log('Try Again!');
  } else {
      console.log('Please pick a valid weapon!');
  }
  console.log('\n');
  console.log(`Player One: ${playerOneVictories} || Player Two: ${playerTwoVictories}`);
  console.log('\n')

    if (playerOneVictories === 3) {
      console.log('Player One is the victor!');
      break;
    } else if (playerTwoVictories === 3) {
      console.log('Player Two is the victor!');
      break;
   }
};
