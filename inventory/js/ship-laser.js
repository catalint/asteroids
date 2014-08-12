Polymer('ship-laser',{
    hitTest:null,
    startAnimation:function(){
        $(this).animate({left: "100%"},{duration:1000,easing:'linear',complete:function(){
            $(this).remove();
        }});
    },
    attached:function(){
        this.hitTest = new HitTest( this.$.image );
        this.startAnimation();
    },
    getImage:function(){
        return this.$.image;
    }
});