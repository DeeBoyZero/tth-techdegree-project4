/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
** Game.js */

class Game {
    constructor() {
        // used to track the number of missed guesses by the player.
        this.missed = 0;
        // an array of five Phrase objects to use with the game.
        this.phrases = ['I like to test some phrases', 'Merry Christmas', 'I feel retarded', 'Programming is fun', 'Learning Javascript is awesome'];
        // This is the Phrase object that’s currently in play.
        this.activePhrase = null;
    }

    // Method used to start a new game and reset the game components to their original state.
    startGame() {
        // Extra Credit
        // Show the Dark mode slider on new game.
        document.querySelector('.theme-switch-wrapper').style.display = 'flex';

        // Add a fadeout on the overlay and reset game components
        document.getElementById('overlay').classList.add('startFadeout');
        setTimeout(() => {
            document.getElementById('overlay').style.visibility = 'hidden'; 
        }, 1000)
        document.querySelector('#phrase ul').innerHTML = '';
        document.querySelectorAll('.key').forEach((key) => {
            key.className = 'key';
            key.disabled = false;
        });
        document.querySelectorAll("img[src='images/lostHeart.png']").forEach((img) => {
            img.src = 'images/liveHeart.png';
        });
        this.missed = 0;

        // Initialize a new Phrase object and set it as activePhrase
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    // Returns a random phrase from the Game object's phrases array
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    // Game logic is handled by using the event delegation from listener in app.js. If accepts both keyup and click events.
    handleInteraction(event) {
        // Extra credit 
        // If keyup is passed and game has started, it disables the corresponding key on the visual keyboard and apply the right class to the element.
        // If the key match a letter in the activePhrase, checkForWin() is called and the letter is revealed and if not, removeLife() is called.
        if (event.type === 'keyup' && this.activePhrase) {
            document.querySelectorAll('.key').forEach((key) => {
                if (event.key === key.textContent && !key.disabled) {
                    key.disabled = true;
                    if (this.activePhrase.checkLetter(event.key)) {
                        key.classList = "chosen key";
                        this.activePhrase.showMatchedLetter(event.key);
                        this.checkForWin();
                    } else {
                        key.classList = "wrong key";
                        this.removeLife();
                    }
                }
            });
        // If click is passed, it disables the key on the visual keyboard and apply the right class to the element.
        // If the clicked key match a letter in the activePhrase, checkForWin() is called and the letter is revealed and if not, removeLife() is called.
        } else if (event.type === 'click' && this.activePhrase) {
            event.target.disabled = true;
            if (this.activePhrase.checkLetter(event.target.innerText)) {
                event.target.classList = "chosen key";
                this.activePhrase.showMatchedLetter(event.target.innerText);
                this.checkForWin();
            } else {
                event.target.classList = "wrong key";
                this.removeLife();
            }
        }

    }

    // Method used to remove lives and change the heart img for each missing live.
    removeLife() {
        this.missed += 1;
        if (document.querySelector("img[src='images/liveHeart.png']")) {
            document.querySelector("img[src='images/liveHeart.png']").src = "images/lostHeart.png";
        }
        
        // If the player has five missed guesses, the gameOver() method is called to end the game.
        if (this.missed >= 5) {
            this.gameOver('Game Over, you ran out of lives!', 'lose');
        }
    }

    // Each time the player guesses a letter, this method check if every letters has been found by 
    // calculating the total of guessed letters + space and compares it to the total number of letters
    checkForWin() {
        const lettersLI = document.querySelectorAll('#phrase li');
        const foundLetters= document.querySelectorAll('.show');
        const spaces = document.querySelectorAll('.space');

        if (foundLetters.length + spaces.length ===  lettersLI.length) {
            this.gameOver('Congratulations, you won!', 'win');
        }
    }

    // Used to end game when the player either wins or loses and show the overlay with a custom message
    // and color by applying the right class depending on the result of the game.
    gameOver(message, winOrLose) {
        document.querySelector('.theme-switch-wrapper').style.display = 'none';
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById('game-over-message').innerText = message;
        document.getElementById('overlay').className = winOrLose;
        document.querySelector('#btn__reset span').textContent = 'Start a new Game';
    }
}