Crafty.c('Explosion', {
    options: {
        maxParticles: 50,
        size: 20,
        sizerandom: 0,
        speed: 5,
        speedrandom: 1.2,
        lifespan: 10,
        lifespanrandom: 7,
        angle: 0,
        anglerandom: 360,
        startcolour: [255, 131, 0, 1],
        startcolourrandom: [48, 50, 45, 0],
        endcolour: [245, 35, 0, 0],
        endcolourrandom: [60, 60, 60, 0],
        // only applies when fastmode is off, specifies how sharp the gradients are drawn
        sharpness: 100,
        sharpnessrandom: 10,
        // random spread from origin
        spread: 20,
        // how many frames should this last
        duration: -1,
        // will draw squares instead of circle gradients
        fastmode: true,
        gravity: { x: 0, y: 0 },
        // sensible values are 0-3
        jitter: 3
    },


    init: function () {
        this.requires("2d,Canvas,Particles")
            .particles(this.options);
    },

    launch: function (pivot) {
        this.pivot = pivot;

        this.bind("EnterFrame", function () {
            this.attr({
                x: this.pivot.x + this.pivot.w / 2,
                y: this.pivot.y + this.pivot.h / 2
            });
        });

        //TODO make pretty!
        var that = this;
        Crafty.e("Delay").delay(function () {
            that.destroy();
        }, 300);
    }

});