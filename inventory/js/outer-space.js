Polymer('outer-space',{
    timeoutAddAsteroids:null,
    animateBackground:function(){
        $(this).animate({
            backgroundPositionX: '-=10000%'
        }, 800000, 'linear', function () {
            this.animateBackground();
        });
    },
    addAsteroid:function(){
        var game = document.querySelector('page-game');
        if(!game.pause) {
            var asteroid = new SpaceAsteroid();
            $(this).append(asteroid);
        }
    },
    stopAddingAsteroids:function(){
      clearTimeout(this.timeoutAddAsteroids);
    },
    startAddingAsteroids:function(){
        var that =this;
        (function loop() {
            var rand = Math.round(Math.random() * (700 - 100)) + 100; // between 100 and 700 ms for new asteroid
                that.timeoutAddAsteroids = setTimeout(function () {
                    that.addAsteroid();
                    loop();
                }, rand);
        }());
    }
});