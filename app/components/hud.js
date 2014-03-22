Crafty.c('HUD', {
    score: 0,
    lives: 0,
    shield: 0,

    init: function () {
        this.$_hud = $('#HUD');

        this.$_score = $('.hud-score .value', this.$_hud);
        this.$_lives = $('.hud-lives .value', this.$_hud);
        this.$_shield = $('.hud-shield .value', this.$_hud);

        this.reset();

        return this;
    },

    reset: function () {
        this.setScore(0);
        this.setLives(0);
        this.setShield(0);

        return this;
    },

    hide: function () {
        this.$_hud.hide();
        return this;
    },

    show: function () {
        this.$_hud.show();
        return this;
    },

    setScore: function (value) {
        this.score = value;
        this.$_score.text(value);
        return this;
    },

    setLives: function (value) {
        this.lives = value;
        this.$_lives.text(value);
        return this;
    },

    setShield: function (value) {
        this.shield = value;
        this.$_shield.text(value);
        return this;
    }

});