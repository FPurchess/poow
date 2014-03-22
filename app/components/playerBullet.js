Crafty.c('PlayerBullet', {
    velocity: 24,

    init: function () {
        this.requires("2D,Canvas,spr_player_bullet,Collision")
            .onHit('Enemy', function (entities) {
                var entity = entities[0]['obj'];
                entity.damage();
                this.explode(entity);
            });

        Crafty.audio.play('shot');
    },

    spawn: function (x, y, rotation) {
        this.attr({x: x + this.w / 2, y: y + this.w / 2});
        this.rotation = rotation;

        this.bind("EnterFrame", function () {
            this.moveBullet();
        });

        return this;
    },

    explode: function (entity) {
        Crafty.audio.play('hit');

        Crafty.e('Explosion').launch(entity);

        this.destroy();
    },

    moveBullet: function () {
        if (this.x + this.w > Game.width() || this.x + this.w < 0 ||
            this.y + this.h > Game.height() || this.y + this.h < 0) {

            // out of sight
            this.destroy();

        } else {

            // move!
            var rad_angle = Crafty.math.degToRad(this.rotation + 90),
                move_x = this.velocity * Math.cos(rad_angle),
                move_y = this.velocity * Math.sin(rad_angle);

            this.attr({x: this.x + move_x, y: this.y + move_y});
        }
    },
});
