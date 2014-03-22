//Crafty.c("Player", {
//    hp: {
//        current: 100,
//        max: 100,
//        percent: 100
//    },
//    shield: {
//        current: 100,
//        max: 100,
//        percent: 100
//    },
//    movementSpeed: 8,
//    lives: 3,
//    score: 0,
//    weapon: {
//        firerate: 5,
//        name: "Weapon1"
//    },
//    powerups: {},
//    ship: "ship1",
//    bars: {},
//    infos: {},
//    preparing: true,
//    bounce: false,
//    init: function () {
//
//        var stage = $('#cr-stage');
//        var keyDown = false; //Player didnt pressed a key
//        this.requires("2D,Canvas,Multiway,Keyboard,Collision,Flicker")/*Add needed Components*/
//            .multiway(this.movementSpeed, { /*Enable Movement Control*/
//                UP_ARROW: -90,
//                DOWN_ARROW: 90,
//                RIGHT_ARROW: 0,
//                LEFT_ARROW: 180
//            })
//            .bind("KeyDown", function (e) {
//                if (e.keyCode === Crafty.keys.SPACE) {
//                    keyDown = true;
//                }
//            })
//            .bind("KeyUp", function (e) {
//                if (e.keyCode === Crafty.keys.SPACE) {
//                    keyDown = false;
//                }
//            })
//            .bind("EnterFrame", function (frame) {
//                if (frame.frame % this.weapon.firerate == 0) {
//
//                    if (keyDown) {
//                        this.shoot();
//                    }
//
//                    Crafty.trigger("UpdateStats");
//
//                }
//                if (this.preparing) {
//                    this.y--;
//                    if (this.y < Crafty.viewport.height - this.h - Crafty.viewport.height / 4) {
//                        this.preparing = false;
//                        this.flicker = false;
//
//                    }
//                }
//
//
//            })
//            .bind("Killed", function (points) {
//                this.score += points;
//                Crafty.trigger("UpdateStats");
//            })
//            .bind("Hurt", function (dmg) {
//                if (this.flicker) return;
//                if (this.bounce == false) {
//                    this.bounce = true;
//                    var t = this;
//                    stage.effect('highlight', {
//                        color: '#990000'
//                    }, 100, function () {
//                        t.bounce = false;
//                    });
//                }
//                Crafty.e("Damage").attr({
//                    x: this.x,
//                    y: this.y
//                });
//                if (this.shield.current <= 0) {
//                    this.shield.current = 0;
//                    this.hp.current -= dmg;
//                } else {
//                    this.shield.current -= dmg;
//                }
//                Crafty.trigger("UpdateStats");
//                if (this.hp.current <= 0) this.die();
//            })
//            .onHit("EnemyBullet", function (ent) {
//                var bullet = ent[0].obj;
//                this.trigger("Hurt", bullet.dmg);
//                bullet.destroy();
//            })
//            .bind("RestoreHP", function (val) {
//                if (this.hp.current < this.hp.max) {
//                    this.hp.current += val;
//                    Crafty.trigger("UpdateStats");
//                }
//
//            })
//            .bind("RestoreShield", function (val) {
//                if (this.shield.current < this.shield.max) {
//                    this.shield.current += val;
//                    Crafty.trigger("UpdateStats");
//                }
//
//            })
//            .reset() /*Set initial points*/;
//        return this;
//    },
//    reset: function () {
//        this.hp = {
//            current: 10,
//            max: 10,
//            percent: 100
//        };
//        this.shield = {
//            current: 10,
//            max: 10,
//            percent: 100
//        };
//        Crafty.trigger("UpdateStats");
//        //Init position
//        this.x = Crafty.viewport.width / 2 - this.w / 2;
//        this.y = Crafty.viewport.height - this.h - 36;
//
//        this.flicker = true;
//        this.preparing = true;
//    },
//    shoot: function () {
//        if (this.preparing) return;
//
//        var bullet = Crafty.e(this.weapon.name, "PlayerBullet");
//        bullet.attr({
//            playerID: this[0],
//            x: this._x + this._w / 2 - bullet.w / 2,
//            y: this._y - this._h / 2 + bullet.h / 2,
//            rotation: this._rotation,
//            xspeed: 20 * Math.sin(this._rotation / (180 / Math.PI)),
//            yspeed: 20 * Math.cos(this._rotation / (180 / Math.PI))
//        });
//
//    },
//    die: function () {
//        this.lives--;
//        Crafty.trigger("UpdateStats");
//        if (this.lives <= 0) {
//            this.destroy();
//            Crafty.trigger("GameOver", this.score);
//        } else {
//            this.reset();
//        }
//
//
//    }
//
//});