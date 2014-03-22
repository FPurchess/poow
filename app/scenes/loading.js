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
        'public/images/player.png',

        // audio
        'public/music/ouroboros.mp3'

    ], function () {
        Crafty.sprite('public/images/ship1.png', {spr_enemy: [0, 0, 63, 50]});
        Crafty.sprite('public/images/ship2.png', {spr_player: [0, 0, 63, 50]});

        Crafty.sprite('public/images/bullet_01.png', {spr_enemy_bullet: [0, 0, 9, 20]});
        Crafty.sprite('public/images/bullet_02.png', {spr_player_bullet: [0, 0, 9, 20]});

        // start!
        Crafty.scene('Game');
    });

});