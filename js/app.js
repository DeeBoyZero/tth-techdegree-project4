/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Initialize a the Game object
const game = new Game();

// Add a cick listener of the start game button to start new game or reset the game.
 document.querySelector('#btn__reset').addEventListener('click', () => {
    game.startGame();
 });

// Add a click event listener on the keys of the visual keyboard and uses event delegation for the game logic. 
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e);
    }
});

// Extra credit
// Let the player use his physical keyboard to interact with the game. It filters for letters only. It uses event delegation for the game logic.

document.addEventListener('keyup', (e) => {
    if (e.keyCode > 64 && e.keyCode < 91) {
        game.handleInteraction(e);
    }
});  

