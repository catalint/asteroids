Polymer('page-game',{
    getOuterSpace:function(){
        return this.$.outerSpace;
    },
    getSpaceShip:function(){
        return this.$.spaceShip;
    },
    getLasers:function(){
        return this.$.outerSpace.querySelectorAll('ship-laser').array();
    }
});