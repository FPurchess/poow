Crafty.c('EnemyBullet', {
    velocity: 24,

    init: function() {
        this.requires("2D,Canvas,spr_bullet,Collision");
    },

    spawn: function(x, y) {
        console.log('Bullet::spawn');

        this.attr({x: x, y: y});
        this.rotation = 90;

        this.bind("EnterFrame", function() {
            this.move();
        });

        return this;
    },

    move: function() {
        if (this.x < Game.width()) {
            this.x += this.velocity;
        } else {
            this.die();
        }
    },

    die: function() {
        this.destroy();

        return this;
    }
});
