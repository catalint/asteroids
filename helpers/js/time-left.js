'use strict';
Polymer('time-left',{
    timeLeft:120,
    created:function(){
        var game = document.querySelector('page-game');
        var that = this;
        game.addEventListener('changedTime',function(){
           that.timeLeft = game.timeLeft;
        });
    }
});