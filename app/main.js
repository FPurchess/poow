Game = {
    width: function () {
        return Crafty.DOM.window.width;
    },
    height: function () {
        return Crafty.DOM.window.height;
    },

    start: function () {
        Crafty.init();
        Crafty.background('#000 url(public/images/bg-tile.png) center center repeat');

        Crafty.scene('Loading');
    }

};

$text_css = {
    color: '#ffffff',
    size: '20px',
    family: 'Orbitron'
};