Crafty.scene('Loading', function () {
    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height() / 2, w: Game.width() })
        .textFont($text_css)
        .css({textAlign: 'center'})
        .css($text_css);

    window.setTimeout(function () {
        Crafty.scene('Game');
    }, 0);

});