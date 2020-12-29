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
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    handleInteraction(event) {
        event.target.disabled = true;
        if (this.activePhrase.checkLetter(event.target.innerText)) {
            event.target.classList = "chosen";
            this.activePhrase.showMatchedLetter(event.target.innerText);
            this.checkForWin();
        } else {
            event.target.classList = "wrong";
            this.removeLife();
        }
    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}