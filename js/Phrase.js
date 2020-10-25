/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const html = `
        <div id="phrase" class="section">
            <ul>
                <li class="hide letter h">h</li>
                <li class="hide letter o">o</li>
                <li class="hide letter w">w</li>
                <li class="space"> </li>
                <li class="hide letter a">a</li>
                <li class="hide letter r">r</li>
                <li class="hide letter e">e</li>
                <li class="space"> </li>
                <li class="hide letter y">y</li>
                <li class="hide letter o">o</li>
                <li class="hide letter u">u</li>
            </ul>
        </div>
        `
        const phrase = this.phrase;
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.firstElementChild;

        for (let i = 0; i< this.phrase.length; i++){
            if (phrase[i].search(/\w/) != -1){
                const li = document.createElement('li');
                li.className += (`hide letter ${phrase[i]}`);
                const textNode = document.createTextNode(`${phrase[i]}`);
                li.appendChild(textNode);
                ul.appendChild(li);
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
 
    showMatchedLetter(letter) {
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.firstElementChild;
        const domElements = ul.querySelectorAll(`li.${letter}`);
        domElements.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
        })
    }
 }

