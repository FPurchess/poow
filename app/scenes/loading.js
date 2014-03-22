Crafty.scene('Loading', function () {
    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height() / 2, w: Game.width() })
        .textFont($text_css)
        .css({textAlign: 'center'})
        .css($text_css);


    Crafty.load([
        'assets/player.png',
    ], function () {
        Crafty.sprite('assets/player.png', {spr_player: [0, 0, 50, 50]});

        Crafty.scene('Game');
    });

});