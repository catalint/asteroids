'use strict';
Polymer('user-lifes',{
    remainingLifes:[true,true,true],
    created:function(){
        var game = document.querySelector('page-game');
        var that = this;
        game.addEventListener('lostLife',function(){
            var lifesArray = [];
            for(var i=0;i<game.remainingLifes;i++){
                lifesArray.push(true);
            }

            that.remainingLifes = lifesArray;
        });
    }
});