'use strict';
Polymer('user-lifes',{
    remainingLifes:function(){
        var game = document.querySelector('page-game');
        var lifes = game.remainingLifes;
        var lifesArray = [];
        for(var i=0;i<lifes;i++){
            lifesArray.push(true);
        }
       return lifesArray;
    }
});