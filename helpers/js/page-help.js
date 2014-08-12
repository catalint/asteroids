Polymer('page-help',{
    domReady:function(){
        var that=this;

        $(window).blur(function(){
            if(that.$.helpDialog.opened==false) {
                that.$.helpDialog.toggle();
            }
        });

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
        if(event.keyCode==32){
            if(this.$.helpDialog.opened==true){
                  this.startGame();
            }
        }
        if(event.keyCode==27){
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