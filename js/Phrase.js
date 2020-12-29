/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

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


     checkLetter(target) {
        return this.phrase.includes(target);
     }

     showMatchedLetter(target) {
         Array.from(document.getElementsByClassName(target)).forEach(function(item) {
            item.classList.add('show');
            item.classList.remove('hide'); 
         });
     }
 }