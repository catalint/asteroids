Polymer('ship-laser',{
    attached:function(){
        $(this).animate({left: "100%"},{duration:1000,easing:'linear',complete:function(){
            $(this).remove();
        }});
    }
});