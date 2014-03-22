Crafty.c('HUD', {
    init: function () {
        this.$_hud = $('#HUD');

        this.$_score = $('.hud-score .value', this.$_hud);
        this.$_lives = $('.hud-lives .value', this.$_hud);
        this.$_shield = $('.hud-shield .value', this.$_hud);

        this.bind("UpdateStats", this.update);

        return this;
    },

    update: function () {
        this.setScore(Game.player.score);
        this.setLives(Game.player.lives);
        this.setShield(Game.player.shield);

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
        this.$_score.text(value);
        return this;
    },

    setLives: function (value) {
        this.$_lives.text(value);
        return this;
    },

    setShield: function (value) {
        this.$_shield.text(value);
        return this;
    }

});