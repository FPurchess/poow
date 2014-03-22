Crafty.c('Enemy', {
    shield: 100,
    score: 100,
    movementSpeed: 8,
    moveCounter: 0,
    shootInterval: 10,  // number of moves until next bullet is fired

    init: function () {
        this.requires("2D,Canvas,spr_enemy,Collision");
    },

    spawn: function () {
        console.log('Enemy::spawn');

        this.attr({x: -this.w, y: randInt(0, Game.height() - 50)});
        this.rotation = 90;

        this.bind("EnterFrame", function () {
            this.moveEnemy();
            this.shootBullet();
        });

        return this;
    },

    moveEnemy: function () {
        if (this.x < Game.width()) {
            this.x += this.movementSpeed;
            this.moveCounter++;
        } else {
            this.die();
        }
    },

    shootBullet: function () {
        if (this.moveCounter % this.shootInterval == 0) {
            Crafty.e('EnemyBullet').spawn(this.x + this.w / 2, this.y + this.h / 2, this.rotation);
        }
    },

    die: function () {
        this.destroy();

        return this;
    }

});
