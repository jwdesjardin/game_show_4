/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    // this.phrase is a all lowercase string
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phrase = this.phrase;
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.firstElementChild;

        //loop through the this.phrase string
        for (let i = 0; i< this.phrase.length; i++){
            // if its a word character, create and append char li
            if (phrase[i].search(/\w/) != -1){
                const li = document.createElement('li');
                li.className += (`hide letter ${phrase[i]}`);
                const textNode = document.createTextNode(`.`);
                li.appendChild(textNode);
                ul.appendChild(li);
            //if its a space create and append space li
            } else if ((phrase[i].search(/\s/) != -1)){
                const li = document.createElement('li');
                li.classList.add(`space`);
                const textNode = document.createTextNode(' ');
                li.appendChild(textNode);
                ul.appendChild(li);
            }
        }
    }
 
    
    checkLetter(letter) {
        return this.phrase.includes(letter);

    }
 
    //selects elements that match letter and shows the letter
    showMatchedLetter(letter) {
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.firstElementChild;
        const domElements = ul.querySelectorAll(`li.${letter}`);
        domElements.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
            li.textContent = letter;
        })
    }
 }

