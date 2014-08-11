Polymer('space-ship',{
    domReady:function(){
        var that=this;

        that.initSpaceShip();
    },
    initSpaceShip:function(){
        $(this).css('left','0px');
        $(this).css('top','50%');

        setInterval(this.moveShip.bind(this), 24);

        this.keypressHandler();
    },
    moves:{},
    moveShip:function(){
        console.log('move');
        for (var move in this.moves) {
            if (move == 37) {
//                console.log('left');
                $(this).animate({left: "-=5px"}, 0);
            }
            if (move == 38) {
//                console.log('up');
                $(this).animate({top: "-=5px"}, 0);
            }
            if (move == 39) {
//                console.log('right');
                $(this).animate({left: "+=5px"}, 0);
            }
            if (move == 40) {
//                console.log('down');
                $(this).animate({top: "+=5px"}, 0);
            }
        }
    },
    keypressHandler:function(){
        var that = this;
        $(document).keydown(function(e) {
            that.moves[e.which] = true;
        });
        $(document).keyup(function(e) {
            delete that.moves[e.which];
        });
//        e.preventDefault();
    }
});