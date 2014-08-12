Polymer('space-asteroid',{
    imageNumber:1,
    hitTest:null,
    created:function(){
        this.setupRandomAsteroid();

        $(this).css('left','100%');
    },
    setupRandomAsteroid:function(){
        var min = 1;
        var max = 6;
        this.imageNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    setupRandomTopPosition:function(){
        var min = -100;
        var max = $(this).parent().height();
        var pos = Math.floor(Math.random() * (max - min + 1)) + min;
        $(this).css('top',pos);
    },
    startAnimation:function(){
        var game = document.querySelector('page-game');
        var spaceShip = game.getSpaceShip();
        var steps =0;
        $(this).animate({left: "-150px"},{duration:10000,easing:'linear',complete:function(){
            $(this).remove();
        },step:function(){
            steps++;
            // Lasers hit asteroids
            var lasers = game.getLasers();
            if(lasers.length>0){
                    for (var i in lasers) {
                        var laser = lasers[i];
                        var hit = this.hitTest.toObject(laser);
                        if (hit) {
                            $(laser).stop().remove();
                            $(this).stop().remove();
                        }
                }
            }
            if(steps==25){ // for performance
                // Asteroids hit space ship
                var hit = this.hitTest.toObject(spaceShip);
                if(hit){
                    spaceShip.crash();
                    $(this).stop().remove();
                }
                steps=0;
            }
        }});
    },
    attached:function(){

        this.hitTest = new HitTest( this);

        this.setupRandomTopPosition();
        this.startAnimation();

    },
    domReady:function(){


    }
});