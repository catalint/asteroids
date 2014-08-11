
Polymer('page-intro',{
    domReady:function(){
        this.$.introDialog.toggle();
    },
    startGame:function(){
        console.log('startGame');

        var p = document.querySelector('core-animated-pages');
        p.selected=1;
    }
});