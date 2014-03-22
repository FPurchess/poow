Crafty.c('Enemy', {
    shield: 100,
    score: 100,
    movementSpeed: 8,
    shootDistanceInterval: 80,  // distance travelled until next bullet is fired

    init: function() {
        this.requires("2D,Canvas,spr_player,Collision");
    },

    spawn: function() {
        console.log('Enemy::spawn');

        this.attr({x: -this.w, y: Game.height() / 2});
        this.rotation = 90;

        this.bind("EnterFrame", function() {
            this.move();
            this.shoot();
        });

        return this;
    },

    move: function() {
        if (this.x < Game.width()) {
            this.x += this.movementSpeed;
        } else {
            this.die();
        }
    },

    shoot: function() {
        if (this.x % this.shootDistanceInterval == 0) {
            Crafty.e('EnemyBullet').spawn(this.x, this.y);
        }
    },

    die: function() {
        this.destroy();

        return this;
    }

});
