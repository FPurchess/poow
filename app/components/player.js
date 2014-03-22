Crafty.c("Player", {
    shield: 10,
    velocity: 8,
    speed: 0,
    angle: 0,
    lives: 3,
    score: 0,

    init: function () {
        this.requires("2D,Canvas,spr_player,Keyboard,Collision")
            .origin('center')
            .reset();

        this.bind('EnterFrame', function (e) {
            //TODO dynamic velocity
            //TODO angles seem to be wrong

            // shoot!
            if (this.isDown(Crafty.keys.SPACE)) {
                this.shootBullet();
            }

            // left.
            if (this.isDown(Crafty.keys.LEFT_ARROW)) {
                this.angle -= this.velocity;
            }

            // right.
            if (this.isDown(Crafty.keys.RIGHT_ARROW)) {
                this.angle += this.velocity;
            }

            // forward.
            if (this.isDown(Crafty.keys.UP_ARROW)) {
                this.speed = this.velocity;
            }

            // backward.
            if (this.isDown(Crafty.keys.UP_ARROW)) {
                this.speed = -this.velocity;
            }

            this.maneuver();

        });

        console.log('Player::init');
        return this;
    },

    damage: function() {
        this.shield--;
        Game.HUD.setShield(this.shield);
        Crafty.audio.play('hit');

        return this;
    },

    shootBullet: function() {
        Crafty.e('PlayerBullet').spawn(
            this.x + this.w/2,
            this.y + this.h / 2,
            this.angle + 180
        );

        return this;
    },

    maneuver: function() {
        var rad_angle = Crafty.math.degToRad(this.angle + 90),
            move_x = this.speed * Math.cos(rad_angle),
            move_y = this.speed * Math.sin(rad_angle);

        this.rotation = this.angle;
        this.attr({x: this.x + move_x, y: this.y + move_y});
    },

    reset: function () {
        this.lives = 3;
        this.shield = 10;

        Game.HUD.setShield(this.shield);
        Game.HUD.setLives(this.lives);


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