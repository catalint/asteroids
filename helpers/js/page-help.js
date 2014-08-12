Polymer('page-help',{
    domReady:function(){
        var that=this;

        $(document).keypress(function(event) {
            that.keypressHandler(event);
        });
        $(document).keydown(function(event) {
            if(event.keyCode==27){
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
        console.log('ky');
        if(event.keyCode==32){
            console.log('space');
            if(this.$.helpDialog.opened==true){
                  this.startGame();
            }
        }
        if(event.keyCode==27){
            console.log('escape');
            var p = document.querySelector('core-animated-pages');
            if(p.selected==1){
                this.$.helpDialog.toggle();
            }
        }
    },
    startGame:function(){
        this.$.helpDialog.toggle();
        var game = document.querySelector('page-game');
        game.startGame();


    }
});