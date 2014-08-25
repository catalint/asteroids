Polymer('page-help',{
    domReady:function(){
        var that=this;

        if(jQuery.browser.mobile){
            this.$.desktopVersion.hidden=true;
            this.$.mobileVersion.hidden=false;
        }
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


        var game = document.querySelector('page-game');
        game.addEventListener('openHelp',function(){
            that.$.helpDialog.toggle();
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