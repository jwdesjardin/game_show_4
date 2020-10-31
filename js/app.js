/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
 let game;
 const submitBtn = document.querySelector('#btn__reset');
 const keys = document.querySelectorAll('button.key');

 //START BUTTON EVENT LISTENER
 submitBtn.addEventListener('click', e => {
     e.preventDefault();
     game = new Game();
     game.startGame()
 });
 
 //KEYS EVENT LISTENER
 keys.forEach(key => {
    key.addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
 });

 //KEYDOWN EVENT LISTENER
 document.addEventListener('keydown', e => {
     const letter = e.key;
     const overlay = document.querySelector('#overlay');

     
     //if enter is hit on overlay screen
     if(letter === 'Enter'){
        if (overlay.style.display === 'flex'){
            game = new Game();
            game.startGame();
        }
     }
     
     //if any key is entererd 
     if (overlay.style.display === 'none'){
        for (let i = 0; i < keys.length; i++){
            if(keys[i].textContent === letter){
                if (!keys[i].classList.contains('wrong')){
                    game.handleInteraction(keys[i]);
                }
            }
        }
     }   
});

