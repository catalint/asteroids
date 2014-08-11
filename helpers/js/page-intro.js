
Polymer('page-intro',{
    domReady:function(){
        this.startGame();
        var that=this;
        this.$.introDialog.toggle();

        $(document).keypress(function(event) {
            if(that.$.introDialog.opened){
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
        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});