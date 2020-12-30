/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

 document.querySelector('#btn__reset').addEventListener('click', () => {
    game.startGame();
 });

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode > 64 && e.keyCode < 91) {
        game.handleInteraction(e);
    }
});