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
    attached:function(){

        var game = document.querySelector('page-game');
        var spaceShip = game.getSpaceShip();
        this.hitTest = new HitTest( this.$.image );

        this.setupRandomTopPosition();

        var steps =0;

        $(this).animate({left: "-100%"},{duration:10000,easing:'linear',complete:function(){
            $(this).remove();
        },step:function(){
            steps++;
            if(steps==5){
                var hit = this.hitTest.toObject(spaceShip.getImage());
                if(hit){
                    $(this).remove();
                    spaceShip.crash();
                }
                steps=0;
            }
        }});
    },
    domReady:function(){


    }
});