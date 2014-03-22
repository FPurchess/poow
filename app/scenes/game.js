Crafty.scene('Game', function () {

    Game.HUD.show();

    Game.player = Crafty.e('Player');
    Crafty.trigger("UpdateStats");

    Crafty.e('Enemy');
    Crafty.e("Delay").delay(function () {
        Crafty.e('Enemy');
    }, 2500, -1);

    Crafty.audio.play("background_music-01", -1, 0.6);

});