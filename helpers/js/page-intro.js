'use strict';
Polymer('page-intro',{
    domReady:function(){
        var that=this;
        this.$.introDialog.toggle();

        $(document).keypress(function(event) {
            var p = document.querySelector('core-animated-pages');
            if(p.selected==0){
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
        var game = document.querySelector('page-game');
        game.startGame();

        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});