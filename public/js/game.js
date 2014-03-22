function randInt(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function randChoice(t){return t[Math.floor(Math.random()*t.length)]}Game={width:function(){return Crafty.DOM.window.width},height:function(){return Crafty.DOM.window.height},start:function(){Crafty.init(),Crafty.background("#000"),Crafty.scene("Loading")}},$text_css={color:"#ffffff",size:"20px",family:"Orbitron"},$text_hud={color:"rgba(30,230,30,0.7)"},Crafty.c("Enemy",{shield:100,score:100,movementSpeed:8,init:function(){this.requires("2D,Canvas,spr_player,Collision")},spawn:function(){return console.log("Enemy::spawn"),this.attr({x:-this.w,y:Game.height()/2}),this.rotation=90,this.bind("EnterFrame",function(){this.x<Game.width()?this.x+=this.movementSpeed:this.die()}),this},die:function(){return this.destroy(),this}}),Crafty.c("HUD",{score:0,lives:0,shield:0,init:function(){this.$_hud=$("#HUD"),this.$_score=$(".hud-score .value",this.$_hud).text(this.score),this.$_lives=$(".hud-lives .value",this.$_hud).text(this.lives),this.$_shield=$(".hud-shield .value",this.$_hud).text(this.shield)},clear:function(){this.$_score.text(""),this.$_lives.text(""),this.$_shield.text("")},hide:function(){return this.$_hud.hide(),this},show:function(){return this.$_hud.hide(),this},setScore:function(t){return this.score=t,this.$_score.text(t),this},setLives:function(t){return this.lives=t,this.$_lives.text(t),this},setShield:function(t){return this.shield=t,this.$_shield.text(t),this}}),Crafty.c("Player",{shield:{current:10,max:10},movementSpeed:8,angle:0,lives:3,score:0,init:function(){return this.requires("2D,Canvas,spr_player,Multiway,Collision").multiway(this.movementSpeed,{UP_ARROW:-90,DOWN_ARROW:90,RIGHT_ARROW:0,LEFT_ARROW:180}).reset(),console.log("Player::init"),this},reset:function(){return this.shield={current:10,max:10},Crafty.trigger("UpdateStats"),this.attr({x:Crafty.viewport.width/2-this.w/2,y:Crafty.viewport.height/2-this.h/2,w:50,h:50}),this}}),Crafty.scene("Game",function(){this.player=Crafty.e("Player"),Crafty.e("Enemy").spawn()}),Crafty.scene("Loading",function(){Crafty.e("2D, DOM, Text").text("Loading...").attr({x:0,y:Game.height()/2,w:Game.width()}).textFont($text_css).css({textAlign:"center"}).css($text_css),Crafty.load(["assets/player.png"],function(){Crafty.sprite("assets/player.png",{spr_player:[0,0,50,50]}),Crafty.scene("Game")})});
//# sourceMappingURL=game.js.map