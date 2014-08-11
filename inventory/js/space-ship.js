Polymer('space-ship',{
    hitTest:null,
    domReady:function(){
        this.initSpaceShip();
        this.hitTest = new HitTest( this.$.image );
    },
    crash:function(){
        // remove 1 life

        this.resetShipPosition();// reset position to start
    }
    ,
    getImage:function(){
        return this.$.image;
    },
    resetShipPosition:function(){
        // Ship starting position
        $(this).css('left','50px');
        $(this).css('top','50%');
    },
    initSpaceShip:function(){
        this.resetShipPosition();
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
                if(parseFloat(this.style.left)>0){
                    $(this).animate({left: "-=5px"}, 0);
                }
            }
            if (move == 38) {
//                console.log('up');
                if(parseFloat(this.style.top)>0){
                    $(this).animate({top: "-=5px"}, 0);
                }
            }
            if (move == 39) {
                var maxRight =  parseFloat($(this).parent().width())-parseFloat($(this).width());
                if(parseFloat(this.style.left)<maxRight) {
                    $(this).animate({left: "+=5px"}, 0);
                }
            }
            if (move == 40) {
                var maxBottom =  parseFloat($(this).parent().height())-parseFloat($(this).height());
                if(parseFloat(this.style.top)<maxBottom) {
                    $(this).animate({top: "+=5px"}, 0);
                }
            }
        }
    },

    // Laser methods
    fire:true,
    fireLaser:function(){
        if(this.fire){
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