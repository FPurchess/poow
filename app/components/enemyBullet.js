Crafty.c('EnemyBullet', {
    velocity: 24,

    init: function () {
        this.requires("2D,Canvas,spr_enemy_bullet,Collision")
            .onHit("Player", function (entities) {
                //TODO error prone?
                var entity = entities[0]['obj'];
                entity.damage();
                this.explode(entity);
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

    explode: function (entity) {
        Crafty.audio.play('hit');
        Crafty.e('Explosion').launch(entity);
        this.destroy();
    },

    moveBullet: function () {
        if (this.x < Game.width()) {
            this.x += this.velocity;
        } else {
            this.destroy();
        }
    }

});
