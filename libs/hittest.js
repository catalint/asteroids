/**
 * @author Catalin Tanasescu
 * @param objectSource
 * @constructor
 */
function HitTest( objectSource ){

    this.objectSource = objectSource;

}


HitTest.prototype.objectSource;

HitTest.prototype.toObject = function( secondObjectSource ){
    var aa = this.objectSource;
    var bb = secondObjectSource;

    var a = {};
    a.y = parseFloat($(aa).css('top'));
    a.x = parseFloat($(aa).css('left'));
    a.width = parseFloat($(aa).css('width'));
    a.height = parseFloat($(aa).css('height'));
    
    var b = {};
    b.y = parseFloat($(bb).css('top'));
    b.x = parseFloat($(bb).css('left'));
    b.width = parseFloat($(bb).css('width'));
    b.height = parseFloat($(bb).css('height'));
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
        );
};