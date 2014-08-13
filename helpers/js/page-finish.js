'use strict';
Polymer('page-finish',{
    startGame:function(){
        var game = document.querySelector('page-game');
        game.startGame();

        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});