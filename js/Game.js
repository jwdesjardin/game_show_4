/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     
     constructor(){
         this.missed = 0;
         this.phrases = [   new Phrase('coding'), 
                            new Phrase('programming'), 
                            new Phrase('javascript'), 
                            new Phrase('treehouse'), 
                            new Phrase('object')];
         this.activePhrase = null;
     }

    startGame(){
        //hide screen overlay
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randomInt = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomInt];
    }
    handleInteraction = (target) => {
        //disable the key and set the guess letter
        target.setAttribute('disabled', true);
        const guess = target.textContent;
        
        //if phrase includes the guess show the letter and check for win
        if(this.activePhrase.phrase.includes(guess)){
            target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(guess);
            if (this.checkForWin()){
                this.gameOver();
            }
            //else mark the letter as wrong and lose a life
        } else {
            target.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife(){
        //selects the first heart image and sets to miss image
        const liveHeart = document.querySelector('#scoreboard li img[src="images/heart.png"]');
        liveHeart.setAttribute('src', 'images/miss.png');

        // inc missed and check for win
        this.missed++;
        if (this.missed >= 5){
            this.gameOver();
        }

    }

    checkForWin(){
        //loop through phrase lis if any are hideen return false
        const lis = document.querySelectorAll('#phrase ul li');
        for(let i = 0; i < lis.length; i++){
            if (lis[i].className.includes('hide')){
                return false;
            }
        }
        return true;
     }
    
    gameOver(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'flex';
        const message = overlay.querySelector('#game-over-message');
        const emojiDiv = overlay.querySelector('#game-over-emoji');
        const emoji = emojiDiv.firstElementChild;
        const button = emoji.parentElement.nextElementSibling;



        if (this.missed >= 5){
            //change text and background color
            message.textContent = 'You Lost';
            button.textContent = 'Play Again?'
            overlay.className = 'lose';
            //display forwning emoji
            emoji.setAttribute('src', 'images/frown1.png');
            emojiDiv.style.display = 'block';
            if (emojiDiv.previousElementSibling.classList.contains('fas')){
                emojiDiv.previousElementSibling.remove();
            }
        } else {
            //change text and background color
            message.textContent = 'You Won!';
            button.textContent = 'Play Again?'
            overlay.className = 'win';
            //display smiling emoji
            emoji.setAttribute('src', 'images/smile.png');
            emojiDiv.style.display = 'block';
            if (emojiDiv.previousElementSibling.classList.contains('fas')){
                emojiDiv.previousElementSibling.remove();
            }
        }
        this.resetGame();
    }
    resetGame(){
        //reset phrase ul
        const phraseUl = document.querySelector('#phrase').firstElementChild;
        phraseUl.innerHTML = '';
     
        //reset properties
        this.missed = 0;
        this.activePhrase = null;

        //reset keys
        const qwerty = document.querySelector('#qwerty').children;
        for (let i = 0; i < qwerty.length; i++){
            const row = qwerty[i].children
            for(let j = 0; j < row.length; j++){
                row[j].className = 'key';
                row[j].removeAttribute('disabled');
            }
        }
        
        //reset hearts
        const hearts = document.querySelectorAll('#scoreboard li img');
        hearts.forEach(li => {
            li.setAttribute('src', 'images/heart.png')
        })
    }
 }