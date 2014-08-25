Polymer('page-game',{
    pause:true,
    level:1,
    remainingLifes:3,
    defaultLifes:3,
    timeLeft:120,
    defaultTimeLeft:120,
    timeInterval:null,
    score:0,
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
    lostLife:function(){
        this.remainingLifes--;
        if(this.remainingLifes==0){
            this.pauseGame();
            this.fire('openHelp');
        }
        this.fire('lostLife');
    },
    multiplicator:function(){
        if(this.level==1){
            return 1;
        }
        if(this.level==2){
            return 1.3;
        }
        if(this.level==3){
            return 1.7;
        }
    },
    finishedGame:function(){
        this.stopAnimations();
        var p = document.querySelector('core-animated-pages');
        p.selected = 2;
        var finish = document.querySelector('page-finish');
        finish.score = this.score;
    },
    nextLevelGame:function(){
        this.remainingLifes=this.defaultLifes;
        this.level++;
        this.fire('lostLife');
        this.timeLeft = parseInt(this.defaultTimeLeft/this.multiplicator());
        this.fire('changedTime');
    },
    lostAllLives:function(){
        this.remainingLifes=this.defaultLifes;
        this.fire('lostLife');
        this.timeLeft = this.defaultTimeLeft;
        this.fire('changedTime');
    },
    restartGame:function(){
        $(this.getLasers()).remove();
        $(this.getAsteroids()).remove();
        this.getSpaceShip().resetShipPosition();
        this.remainingLifes=this.defaultLifes;
        this.fire('lostLife');
        this.timeLeft = this.defaultTimeLeft;
        this.fire('changedTime');
        this.level=1;
        this.score=0;
    },
    startAnimations:function(){
        var that = this;

        //Start game after finish
        if(this.level==3 && this.timeLeft==0){
            this.restartGame();
        }

        // Lost of lifes code
        if(this.remainingLifes==0){
            this.lostAllLives();
        }
        this.timeInterval = setInterval(function(){
            if(this.timeLeft>0){
                this.timeLeft -=1;
                this.fire('changedTime');

                // End time code
                if(this.timeLeft==0){
                    //Finished game
                    if(this.level==3){
                        this.finishedGame();
                    }else{ // Next level
                        this.nextLevelGame();
                    }

                }
            }
        }.bind(this),1000);
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
        clearTimeout(this.timeInterval);
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
            if(p.selected==1){
                that.keypressHandler(event);
            }
         });



        var draggie = new Draggabilly( this.getSpaceShip(), {
            // options...
        });
        $(window).blur(function(){
            that.pauseGame();
        });
    },
    keypressHandler:function(e){
        if(e.which==27){
            if(this.pause){
                this.startGame();
            }else{
                this.pauseGame();
            }
        }
    }
});