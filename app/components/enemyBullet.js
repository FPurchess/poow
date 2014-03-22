Crafty.c('EnemyBullet', {
    velocity: 24,

    init: function () {
        this.requires("2D,Canvas,spr_enemy_bullet,Collision")
            .onHit("Player", function (entities) {
                for (var idx=0; idx < entities.length; idx++) {
                    entities[idx]['obj'].damage();
                }
                this.destroy();
            });
    },

    spawn: function (x, y, rotation) {
        this.attr({x: x + this.w / 2, y: y + this.h / 2});
        this.rotation = rotation;

        this.bind("EnterFrame", function () {
            this.moveBullet();
        });

        return this;
    },

    moveBullet: function () {
        if (this.x < Game.width()) {
            this.x += this.velocity;
        } else {
            this.destroy();
        }
    }

});
