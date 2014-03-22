Crafty.c('HUD', {
    score: 0,
    lives: 0,
    shield: 0,

    init: function () {

        this.$_hud = $('#HUD');

        this.$_score = $('.hud-score .value', this.$_hud).text(this.score);
        this.$_lives = $('.hud-lives .value', this.$_hud).text(this.lives);
        this.$_shield = $('.hud-shield .value', this.$_hud).text(this.shield);

    },

    clear: function () {
        this.$_score.text('');
        this.$_lives.text('');
        this.$_shield.text('');
    },

    hide: function () {
        this.$_hud.hide();
        return this;
    },

    show: function () {
        this.$_hud.hide();
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