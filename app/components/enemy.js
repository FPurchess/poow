Crafty.c('Enemy', {
    shield: 100,
    score: 100,
    movementSpeed: 8,

    init: function() {
        this.requires("2D,Canvas,spr_player,Collision");
    },

    spawn: function() {
        console.log('Enemy::spawn');

        this.attr({x: -this.w, y: Game.height() / 2});
        this.rotation = 90;

        this.bind("EnterFrame", function() {
            if (this.x < Game.width()) {
                this.x += this.movementSpeed;
            } else {
                this.die();
            }
        });

        return this;
    },

    die: function() {
        this.destroy();

        return this;
    }

});