/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Testing Phrase', 'Phrase Testing', 'I am testing some phrases'];
        this.activePhrase = null;
    }

    startGame() {

        document.getElementById('overlay').style.visibility = 'hidden';
        document.querySelector('#phrase ul').innerHTML = '';
        document.querySelectorAll('.key').forEach((key) => {
            key.className = 'key';
            key.disabled = false;
        });

        document.querySelectorAll("img[src='images/lostHeart.png']").forEach((img) => {
            img.src = 'images/liveHeart.png';
        });

        this.missed = 0;

        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    handleInteraction(event) {
        if (event.type === 'keyup') {
            document.querySelectorAll('.key').forEach((key) => {
                if (event.key === key.textContent) {
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
        } else if (event.type === 'click') {
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

    removeLife() {
        this.missed += 1;
        if (document.querySelector("img[src='images/liveHeart.png']")) {
            document.querySelector("img[src='images/liveHeart.png']").src = "images/lostHeart.png";
        }
 
        if (this.missed >= 5) {
            this.gameOver('Game Over, you ran out of lives!', 'lose');
        }
    }

    checkForWin() {
        const lettersLI = document.querySelectorAll('#phrase li');
        const foundLetters= document.querySelectorAll('.show');
        const spaces = document.querySelectorAll('.space');

        if (foundLetters.length + spaces.length ===  lettersLI.length) {
            this.gameOver('Congratulations, you won!', 'win');
        }
    }

    gameOver(message, winOrLose) {
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById('game-over-message').innerText = message;
        document.getElementById('overlay').className = winOrLose;
    }
}