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
                            new Phrase('banana rama')];
         this.activePhrase = null;
     }

    startGame(){
        //hide screen overlay
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
    }
    getRandomPhrase(){
        const randomInt = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomInt];
    }
    handleInteraction = (target) => {
        console.log(this.activePhrase);
        console.log(target);
        target.setAttribute('disabled', true);
        const guess = target.textContent;
        if(this.activePhrase.phrase.includes(guess)){
            target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(guess);
            if (this.checkForWin()){
                this.gameOver();
            }
        } else {
            target.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife(){
        const liveHeart = document.querySelector('#scoreboard li img[src="images/liveHeart.png"]');
        console.log(liveHeart);
        liveHeart.setAttribute('src', 'images/lostHeart.png');

        this.missed++;
        if (this.missed >= 5){
            this.gameOver();
        }

    }

    checkForWin(){
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
        overlay.style.display = 'block';
        const message = overlay.querySelector('#game-over-message');
        if (this.missed >= 5){
            message.textContent = 'You Lost';
            overlay.className = 'lose';
        } else {
            message.textContent = 'You Won!';
            overlay.className = 'win';
        }
        this.resetGame();
    }
    resetGame(){
        //reset phrase ul
        const phraseUl = document.querySelector('#phrase').firstElementChild;
        phraseUl.innerHTML = '';
     
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
        console.log(hearts);
        hearts.forEach(li => {
            li.setAttribute('src', 'images/liveHeart.png')
        })
    }
 }