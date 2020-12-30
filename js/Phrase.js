/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }

    //  Method used to add letter placeholders to the display when the game starts. 
    //  Each letter is presented by an empty box, one li element for each letter and spaces.
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement('LI');
            if (this.phrase[i] !== ' ') {
                li.classList = `hide letter ${this.phrase[i]}`;
                li.textContent = `${this.phrase[i]}`;
            } else {
                li.classList = "space";
                li.textContent = `${this.phrase[i]}`;
            }
            document.getElementById('phrase').firstElementChild.append(li)
        }
    }

    // Check if the guessed letter is included in the activePhrase of the game Object.
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // Select all the letters that correspond to the guessed letters and show those letters by applying the show class.
    showMatchedLetter(letter) {
        Array.from(document.getElementsByClassName(letter)).forEach(function(item) {
        item.classList.add('show');
        item.classList.remove('hide'); 
        });
    }
 }