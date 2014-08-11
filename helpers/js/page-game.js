Polymer('page-game',{
    ready:function(){
        var that=this;

        $(document).keypress(function(event) {
            that.keypressHandler(event);
        });
    },
    /**
     * Game key events
     * @param event
     */
    keypressHandler:function(event){
        if(event.keyCode==32){
            // Fire laser at the little hobbits
        }
    }
});