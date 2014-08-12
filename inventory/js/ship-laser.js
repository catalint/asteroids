Polymer('ship-laser',{
    startAnimation:function(){
        $(this).animate({left: "100%"},{duration:1000,easing:'linear',complete:function(){
            $(this).remove();
        }});
    },
    attached:function(){
        this.startAnimation();
    },
    getImage:function(){
        return this.$.image;
    }
});