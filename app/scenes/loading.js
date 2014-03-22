Crafty.scene('Loading', function () {
    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height() / 2, w: Game.width() })
        .textFont($text_css)
        .css({textAlign: 'center'})
        .css($text_css);


    // loading...

    Crafty.load([

        // sprites
        'assets/player.png',

        // audio
        'public/music/ouroboros.mp3'

    ], function () {
        Crafty.sprite('assets/player.png', {spr_player: [0, 0, 50, 50]});
        Crafty.sprite('assets/bullet.jpg', {spr_bullet: [0, 0, 50, 50]});

        // start!
        Crafty.scene('Game');
    });

});