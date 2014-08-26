$.fn.dragMe = function() {
    var offset = null;
    var start = function(e) {
        var orig = e.originalEvent;
        var pos = {};
        pos.left = this.offsetLeft;
        pos.top = this.offsetTop;
        offset = {
            x: orig.changedTouches[0].pageX - pos.left,
            y: orig.changedTouches[0].pageY - pos.top
        };
        e.stopPropagation();
    };
    var moveMe = function(e) {
        e.stopPropagation();
        e.preventDefault();
        var orig = e.originalEvent;
        $(this).css({
            top: orig.changedTouches[0].pageY - offset.y,
            left: orig.changedTouches[0].pageX - offset.x
        });
    };
    this.bind("touchstart", start);
    this.bind("touchmove", moveMe);
};