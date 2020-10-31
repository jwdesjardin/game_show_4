/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 const submitBtn = document.querySelector('#btn__reset');
 const keys = document.querySelectorAll('button.key');

 submitBtn.addEventListener('click', e => {
     e.preventDefault();
     game.startGame()
 });
 
 keys.forEach(key => {
    key.addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
 });

 document.addEventListener('keydown', e => {
     const letter = e.key;
     const overlay = document.querySelector('#overlay');

     //if enter is hit on overlay screen
     if(letter === 'Enter'){
        if (overlay.style.display === 'block'){
            game.startGame();
        }
     }
     
     //if any key is entererd 
     if (overlay.style.display === 'none'){
        for (let i = 0; i < keys.length; i++){
            if(keys[i].textContent === letter){
                game.handleInteraction(keys[i]);
            }
        }
     }   
});


 //RESET GAME
