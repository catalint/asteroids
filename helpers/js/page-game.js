Polymer('page-game',{
    pause:true,
    remainingLifes:3,
    defaultLifes:3,
    timeLeft:120,
    defaultTimeLeft:120,
    timeInterval:null,
    getOuterSpace:function(){
        return this.$.outerSpace;
    },
    getSpaceShip:function(){
        return this.$.spaceShip;
    },
    getLasers:function(){
        return this.$.outerSpace.querySelectorAll('ship-laser').array();
    },
    getAsteroids:function(){
        return this.$.outerSpace.querySelectorAll('space-asteroid').array();
    },
    startAnimations:function(){
        var outerSpace = this.getOuterSpace();
        outerSpace.animateBackground();

        var asteroids = this.getAsteroids();
        for(var i in asteroids){
            var asteroid = asteroids[i];
            asteroid.startAnimation();
        }
        var lasers = this.getLasers();
        for(var i in lasers){
            var laser = lasers[i];
            laser.startAnimation();
        }

        outerSpace.startAddingAsteroids();

    },
    stopAnimations:function(){
        var outerSpace = this.getOuterSpace();
        $(outerSpace).stop();
        outerSpace.stopAddingAsteroids();
        var asteroids = this.getAsteroids();
        $(asteroids).stop();
        var lasers = this.getLasers();
        $(lasers).stop();
    },
    pauseGame:function(){
        this.pause = true;
        this.stopAnimations();
    },
    startGame:function(){
        this.pause = false;
        this.startAnimations();
    },
    ready:function(){
        var that=this;
        $(document).keydown(function(event) {
            var p = document.querySelector('core-animated-pages');
            console.log(p.selected);
            if(p.selected==1){
                that.keypressHandler(event);
            }
         });


        $(window).blur(function(){
            that.pauseGame();
        });
    },
    keypressHandler:function(e){
        console.log(e.which);
        if(e.which==27){
            if(this.pause){
                this.startGame();
            }else{
                this.pauseGame();
            }
        }
    }
});