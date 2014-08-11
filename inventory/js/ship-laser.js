Polymer('ship-laser',{
    hitTest:null,
    attached:function(){
        this.hitTest = new HitTest( this.$.image );
        $(this).animate({left: "100%"},{duration:1000,easing:'linear',complete:function(){
            $(this).remove();
        }});
    },
    getImage:function(){
        return this.$.image;
    }
});