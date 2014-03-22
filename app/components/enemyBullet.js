Crafty.c('EnemyBullet', {
    velocity: 24,

    init: function() {
        this.requires("2D,Canvas,spr_enemy_bullet,Collision");
    },

    spawn: function(x, y) {
        console.log('Bullet::spawn');

        this.attr({x: x, y: y});
        this.rotation = 90;

        this.bind("EnterFrame", function() {
            this.moveBullet();
        });

        return this;
    },

    moveBullet: function() {
        if (this.x < Game.width()) {
            this.x += this.velocity;
        } else {
            this.die();
        }
    },

    hit: function() {

    },

    die: function() {
        this.destroy();

        return this;
    }
});
