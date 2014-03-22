Crafty.scene('Game', function () {

    Game.HUD.show();

    Game.player = Crafty.e('Player');

    Crafty.e('Enemy').spawn();
    Crafty.e("Delay").delay(function () {
        Crafty.e('Enemy').spawn();
    }, 2500, -1);

    Crafty.audio.play("background_music-01", -1, 0.4);

});