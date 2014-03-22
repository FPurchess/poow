Crafty.c("Player", {
    shield: {
        current: 10,
        max: 10
    },
    movementSpeed: 8,
    angle: 0,
    lives: 3,
    score: 0,

    init: function () {
        this.requires("2D,Canvas,spr_player,Multiway,Collision")
            .multiway(this.movementSpeed, {
                UP_ARROW: -90,
                DOWN_ARROW: 90,
                RIGHT_ARROW: 0,
                LEFT_ARROW: 180
            })
            .reset();

        console.log('Player::init');
        return this;
    },

    reset: function () {
        this.shield = {
            current: 10,
            max: 10
        };

        Crafty.trigger("UpdateStats");

        this.attr({
            x: Crafty.viewport.width / 2 - this.w / 2,
            y: Crafty.viewport.height / 2 - this.h / 2,
            w: 50,
            h: 50
        });

        return this;
    }

});