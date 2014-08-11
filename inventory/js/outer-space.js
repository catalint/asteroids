Polymer('outer-space',{
    domReady:function(){
        console.log('anim backg');
        this.animateBackground();
        this.startAddingAsteroids();
    },
    animateBackground:function(){
        $(this).animate({
            backgroundPositionX: '-=100%'
        }, 8000, 'linear',function(){
            this.animateBackground();
        });
    },
    addAsteroid:function(){
        var asteroid = new SpaceAsteroid();
        $(this).append(asteroid);
    },
    startAddingAsteroids:function(){
        var that =this;
        (function loop() {
            var rand = Math.round(Math.random() * (3000 - 500)) + 500;
            setTimeout(function() {
                that.addAsteroid();
                loop();
            }, rand);
        }());
    }
});