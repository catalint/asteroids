Polymer('space-ship',{
    domReady:function(){
        this.initSpaceShip();
    },
    initSpaceShip:function(){
        // Ship starting position
        $(this).css('left','50px');
        $(this).css('top','50%');

        setInterval(this.moveShip.bind(this), 24);
//        setInterval(this.fireLaser.bind(this), 24);

        this.keypressHandler();
    },

    // Catch keys pressed
    keypressHandler:function(){
        var that = this;

        $(document).keypress(function(e) {
            if(e.which==32){
                that.fireLaser();
            }
        });

        $(document).keydown(function(e) {
            that.moves[e.which] = true;
        });
        $(document).keyup(function(e) {
            delete that.moves[e.which];
        });
//        e.preventDefault();
    },


    // Move ship methods
    moves:{},
    moveShip:function(){
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

    // Laser methods
    fire:true,
    fireLaser:function(){
        if(this.fire){
            console.log('fire');
            var game = document.querySelector('page-game');
            var outerSpace = game.getOuterSpace();
            var spaceShip = game.getSpaceShip();

            var laser = new ShipLaser();

            $(laser).css('top',parseFloat($(spaceShip).css('top'))+25);
            $(laser).css('left',parseFloat($(spaceShip).css('left'))+150+'px');


            $(outerSpace).append(laser);
        }
    }
});