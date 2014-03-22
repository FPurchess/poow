Crafty.c('PlayerBullet', {
    velocity: 24,

    init: function () {
        this.requires("2D,Canvas,spr_player_bullet,Collision")
            .origin('center');

        Crafty.audio.play('shot');
    },

    spawn: function (x, y, rotation) {
        this.attr({x: x, y: y});
        this.rotation = rotation;

        this.bind("EnterFrame", function () {
            this.moveBullet();
        });

        return this;
    },

    moveBullet: function () {
        if (this.x + this.w > Game.width() || this.x + this.w < 0 ||
            this.y + this.h > Game.height() || this.y + this.h < 0) {

            // out of sight
            this.die();

        } else {

            // move!
            var rad_angle = Crafty.math.degToRad(this.rotation + 90),
                move_x = this.velocity * Math.cos(rad_angle),
                move_y = this.velocity * Math.sin(rad_angle);

            this.attr({x: this.x + move_x, y: this.y + move_y});
        }
    },

    hit: function () {

    },

    die: function () {
        this.destroy();

        return this;
    }
});
