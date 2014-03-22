Crafty.c("Player", {
    velocity: 2,
    maxSpeed: 10,
    speed: 0,
    angle: 0,

    score: 0,
    lives: 3,
    shield: 10,

    init: function () {
        this.requires("2D,Canvas,spr_player,Keyboard,Collision")
            .reset()
            .origin('center')
            .bind('EnterFrame', function (e) {
                var has_accelerated = false;
                //TODO angles seem to be wrong

                // shoot!
                if (this.isDown(Crafty.keys.SPACE)) {
                    this.shootBullet();
                }

                // left.
                if (this.isDown(Crafty.keys.LEFT_ARROW)) {
                    this.angle -= this.maxSpeed;
                }

                // right.
                if (this.isDown(Crafty.keys.RIGHT_ARROW)) {
                    this.angle += this.maxSpeed;
                }

                // forward.
                if (this.isDown(Crafty.keys.UP_ARROW)) {
                    this.speed -= this.velocity;
                    has_accelerated = true;
                }

                // backward.
                if (this.isDown(Crafty.keys.DOWN_ARROW)) {
                    this.speed += this.velocity;
                    has_accelerated = true;
                }

                // Gravitation
                if (!has_accelerated) {
                    if (this.speed > 0) {
                        this.speed -= Game.gravity();

                        if (this.speed < 0) {
                            this.speed = 0;
                        }
                    } else {
                        this.speed += Game.gravity();

                        if (this.speed > 0) {
                            this.speed = 0;
                        }
                    }
                }

                this.speed = Crafty.math.clamp(this.speed, -this.maxSpeed, this.maxSpeed);

                this.maneuver();

            });

        return this;
    },

    damage: function () {
        Crafty.audio.play('hit');

        this.shield--;

        if (this.shield <= 0) {
            this.lives--;

            if (this.lives <= 0) {
                Crafty.scene('GameOver');
            }

            this.reset();
        }

        Crafty.trigger("UpdateStats");

        return this;
    },

    shootBullet: function () {
        Crafty.e('PlayerBullet').spawn(
            this.x + this.w / 2,
            this.y + this.h / 2,
            this.angle + 180
        );

        return this;
    },

    maneuver: function () {
        var rad_angle = Crafty.math.degToRad(this.angle + 90),
            move_x = this.speed * Math.cos(rad_angle),
            move_y = this.speed * Math.sin(rad_angle);

        this.rotation = this.angle;
        this.attr({x: this.x + move_x, y: this.y + move_y});
    },

    reset: function () {
        this.speed = 0;
        this.angle = 0;
        this.shield = 10;

        this.attr({
            x: Crafty.viewport.width / 2 - this.w / 2,
            y: Crafty.viewport.height / 2 - this.h / 2,
            w: 50,
            h: 50
        });

        return this;
    }

});