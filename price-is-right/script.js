//! Create your prompts
// const playerName = prompt("Insert the player Name?");

// console.log("playerName: ", playerName);

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log("randomNumber: ", randomNumber);

// let playerNumber = Number(prompt("Pick a number between 1 and 100"));

// console.log("playerNumber: ", playerNumber);

//! Simão Solution
// function game() {
//   if (playerNumber > randomNumber) {
//     alert("It is less!");
//     playerNumber = Number(prompt("Pick a number between 1 and 100"));
//     game()
//   } else if (playerNumber < randomNumber) {
//     alert("It is more!");
//     playerNumber = Number(prompt("Pick a number between 1 and 100"));
//     game()
//   } else {
//     alert(`Congratulations ${playerName}, you won!`);
//   }
// }

// game()

//! Filipe Solution
//   do {
//     if (playerNumber > randomNumber) {
//         alert("It is less!");
//       } else if (playerNumber < randomNumber) {
//         alert("It is more!");
//       } else {
//         alert(`Congratulations ${playerName}, you won!`);
//       }
//       playerNumber = Number(prompt("Pick a number between 1 and 100"));
//   } while (playerName !== randomNumber);

//* with a while loop

// while (playerNumber !== randomNumber) {
//   playerNumber = Number(prompt("Pick a number between 1 and 100"));

//   if (isNaN(playerNumber)) {
//     playerNumber = Number(prompt("Pick a number between 1 and 100"));
//   } else if (playerNumber > randomNumber) {
//     alert("It is less!");
//   } else if (playerNumber < randomNumber) {
//     alert("It is more!");
//   }
// }
// alert(`Congratulations ${playerName}, you won!`);



//! Another Solution using function and the while loop
// function game(){
//     playerNumber = Number(prompt("Pick a number between 1 and 100"));
//     (playerNumber > randomNumber) ? alert("It is less!") :  alert("It is more!");
// }

// while(playerNumber !== randomNumber) {
//     game()
// }
// alert(`Congratulations ${playerName}, you won!`);
// location.reload();
