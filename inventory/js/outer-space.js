Polymer('outer-space',{
    domReady:function(){
        console.log('anim backg');
        this.animateBackground();
    },
    animateBackground:function(){
        $(this).animate({
            backgroundPositionX: '-=100%'
        }, 8000, 'linear',function(){
            this.animateBackground();
        });
    }
});