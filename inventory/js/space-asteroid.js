Polymer('space-asteroid',{
    imageNumber:1,
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
        this.setupRandomTopPosition();
        $(this).animate({left: "-100%"},{duration:10000,easing:'linear',complete:function(){
            $(this).remove();
        }});
    }
});