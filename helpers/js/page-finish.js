'use strict';
Polymer('page-finish',{
    domReady:function(){
        var that=this;
        this.$.finishDialog.toggle();

        $(document).keypress(function(event) {
            var p = document.querySelector('core-animated-pages');
            if(p.selected==2){
                that.keypressHandler(event);
            }
        });
    },
    /**
     * Start game on space key pressed
     * @param event
     * @param detail
     * @param sender
     */
    keypressHandler:function(event){
        if(event.keyCode==32){
            this.startGame();
        }
    },
    startGame:function(){
        this.$.finishDialog.toggle();

        var game = document.querySelector('page-game');
        game.startGame();

        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});