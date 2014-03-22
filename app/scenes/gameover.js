Crafty.scene('GameOver', function () {
    Crafty.audio.stop("background_music-01");
    Crafty.audio.play('game_over');

//    Game.HUD.show();

    Crafty.e('2D, DOM, Text')
        .text('GAME OVER')
        .attr({ x: 0, y: Game.height() / 2, w: Game.width() })
        .textFont($text_css)
        .css({textAlign: 'center'})
        .css($text_css);

});

