Crafty.scene('Game', function () {

    Crafty.e('2D, DOM, Text')
        .text('Score: ')
        .attr({ x: 20, y: 15, w: 200 })
        .textFont($text_css)
        .css($text_css)
        .css($text_hud);

    Crafty.e('2D, DOM, Text')
        .text('Shield: ')
        .attr({ x: Game.width() - 300, y: 15, w: 200 })
        .textFont($text_css)
        .css($text_css)
        .css($text_hud);

    Crafty.e('2D, DOM, Text')
        .text('Lives: ')
        .attr({ x: Game.width() - 150, y: 15, w: 200 })
        .textFont($text_css)
        .css($text_css)
        .css($text_hud);

    var options = {
        maxParticles: 150,
        size: 20,
        sizeRandom: 0,
        speed: 1,
        speedRandom: 1.2,
        // Lifespan in frames
        lifeSpan: 50,
        lifeSpanRandom: 7,
        // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
        angle: 65,
        angleRandom: 360,
        startColour: [255, 131, 0, 1],
        startColourRandom: [48, 50, 45, 0],
        endColour: [245, 35, 0, 0],
        endColourRandom: [60, 60, 60, 0],
        // Only applies when fastMode is off, specifies how sharp the gradients are drawn
        sharpness: 100,
//        sharpnessRandom: 10,
        // Random spread from origin
        spread: 10,
        // How many frames should this last
        duration: -1,
        // Will draw squares instead of circle gradients
        fastMode: true,
        gravity: { x: 0, y: 0 },
        // sensible values are 0-3
        jitter: 0
    };

    Crafty.e("2D,Canvas,Particles")
        .particles(options)
        .attr({x: Game.width() / 2, y: Game.height() / 2});

});