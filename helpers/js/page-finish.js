'use strict';
Polymer('page-finish',{
    domReady:function(){
        var that=this;

        $(document).keypress(function(event) {
            var p = document.querySelector('core-animated-pages');
            if(p.selected==2){
                that.keypressHandler(event);
            }
        });
    },

    startGame:function(){
        var game = document.querySelector('page-game');
        game.startGame();

        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});