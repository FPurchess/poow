function randInt(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function randChoice(t){return t[Math.floor(Math.random()*t.length)]}Game={width:function(){return Crafty.DOM.window.width},height:function(){return Crafty.DOM.window.height},gravity:function(){return.2},start:function(){Crafty.init(),Crafty.background("#000 url(public/images/bg-tile.png) center center repeat"),this.HUD=Crafty.e("HUD"),Crafty.scene("Loading")}},$text_css={color:"#ffffff",size:"20px",family:"Orbitron"},Crafty.audio.add("background_music-01",["public/music/ouroboros.mp3"]),Crafty.audio.add("game_over",["public/fx/game_over.wav"]),Crafty.audio.add("shot",["public/fx/shot.mp3"]),Crafty.audio.add("hit",["public/fx/explosion-01.ogg","public/fx/explosion-01.wav","public/fx/explosion-01.mp3"]),Crafty.c("Enemy",{shield:3,score:100,movementSpeed:8,moveCounter:0,shootInterval:10,init:function(){this.requires("2D,Canvas,spr_enemy,Collision").attr({x:-this.w,y:randInt(0,Game.height()-50)}).bind("EnterFrame",function(){this.moveEnemy(),this.shootBullet()}),this.rotation=90},moveEnemy:function(){this.x<Game.width()?(this.x+=this.movementSpeed,this.moveCounter++):this.die()},damage:function(){this.shield--,this.shield<=0&&(Game.player.score+=this.score,Game.HUD.setScore(Game.player.score),this.die())},shootBullet:function(){this.moveCounter%this.shootInterval==0&&Crafty.e("EnemyBullet").spawn(this.x+this.w/2,this.y+this.h/2,this.rotation)},die:function(){return this.destroy(),this}}),Crafty.c("EnemyBullet",{velocity:24,init:function(){this.requires("2D,Canvas,spr_enemy_bullet,Collision").onHit("Player",function(t){var e=t[0].obj;e.damage(),this.explode(e)})},spawn:function(t,e,i){return this.attr({x:t+this.w/2,y:e+this.h/2}),this.rotation=i,this.bind("EnterFrame",function(){this.moveBullet()}),this},explode:function(t){Crafty.audio.play("hit"),Crafty.e("Explosion").launch(t),this.destroy()},moveBullet:function(){this.x<Game.width()?this.x+=this.velocity:this.destroy()}}),Crafty.c("Explosion",{options:{maxParticles:50,size:20,sizerandom:0,speed:5,speedrandom:1.2,lifespan:10,lifespanrandom:7,angle:0,anglerandom:360,startcolour:[255,131,0,1],startcolourrandom:[48,50,45,0],endcolour:[245,35,0,0],endcolourrandom:[60,60,60,0],sharpness:100,sharpnessrandom:10,spread:20,duration:-1,fastmode:!0,gravity:{x:0,y:0},jitter:3},init:function(){this.requires("2d,Canvas,Particles").particles(this.options)},launch:function(t){this.pivot=t,this.bind("EnterFrame",function(){this.attr({x:this.pivot.x+this.pivot.w/2,y:this.pivot.y+this.pivot.h/2})});var e=this;Crafty.e("Delay").delay(function(){e.destroy()},300)}}),Crafty.c("HUD",{init:function(){return this.$_hud=$("#HUD"),this.$_score=$(".hud-score .value",this.$_hud),this.$_lives=$(".hud-lives .value",this.$_hud),this.$_shield=$(".hud-shield .value",this.$_hud),this.bind("UpdateStats",this.update),this},update:function(){return this.setScore(Game.player.score),this.setLives(Game.player.lives),this.setShield(Game.player.shield),this},hide:function(){return this.$_hud.hide(),this},show:function(){return this.$_hud.show(),this},setScore:function(t){return this.$_score.text(t),this},setLives:function(t){return this.$_lives.text(t),this},setShield:function(t){return this.$_shield.text(t),this}}),Crafty.c("Player",{velocity:2,maxSpeed:10,speed:0,angle:0,score:0,lives:3,shield:10,init:function(){return this.requires("2D,Canvas,spr_player,Keyboard,Collision").reset().origin("center").bind("EnterFrame",function(){var t=!1;this.isDown(Crafty.keys.SPACE)&&this.shootBullet(),this.isDown(Crafty.keys.LEFT_ARROW)&&(this.angle-=this.maxSpeed),this.isDown(Crafty.keys.RIGHT_ARROW)&&(this.angle+=this.maxSpeed),this.isDown(Crafty.keys.UP_ARROW)&&(this.speed-=this.velocity,t=!0),this.isDown(Crafty.keys.DOWN_ARROW)&&(this.speed+=this.velocity,t=!0),t||(this.speed>0?(this.speed-=Game.gravity(),this.speed<0&&(this.speed=0)):(this.speed+=Game.gravity(),this.speed>0&&(this.speed=0))),this.speed=Crafty.math.clamp(this.speed,-this.maxSpeed,this.maxSpeed),this.maneuver()}),this},damage:function(){return Crafty.audio.play("hit"),this.shield--,this.shield<=0&&(this.lives--,this.lives<=0&&Crafty.scene("GameOver"),this.reset()),Crafty.trigger("UpdateStats"),this},shootBullet:function(){return Crafty.e("PlayerBullet").spawn(this.x+this.w/2,this.y+this.h/2,this.angle+180),this},maneuver:function(){var t=Crafty.math.degToRad(this.angle+90),e=this.speed*Math.cos(t),i=this.speed*Math.sin(t);this.rotation=this.angle,this.attr({x:this.x+e,y:this.y+i})},reset:function(){return this.speed=0,this.angle=0,this.shield=10,this.attr({x:Crafty.viewport.width/2-this.w/2,y:Crafty.viewport.height/2-this.h/2,w:50,h:50}),this}}),Crafty.c("PlayerBullet",{velocity:24,init:function(){this.requires("2D,Canvas,spr_player_bullet,Collision").onHit("Enemy",function(t){var e=t[0].obj;e.damage(),this.explode(e)}),Crafty.audio.play("shot")},spawn:function(t,e,i){return this.attr({x:t+this.w/2,y:e+this.w/2}),this.rotation=i,this.bind("EnterFrame",function(){this.moveBullet()}),this},explode:function(t){Crafty.audio.play("hit"),Crafty.e("Explosion").launch(t),this.destroy()},moveBullet:function(){if(this.x+this.w>Game.width()||this.x+this.w<0||this.y+this.h>Game.height()||this.y+this.h<0)this.destroy();else{var t=Crafty.math.degToRad(this.rotation+90),e=this.velocity*Math.cos(t),i=this.velocity*Math.sin(t);this.attr({x:this.x+e,y:this.y+i})}}}),Crafty.scene("Game",function(){Game.HUD.show(),Game.player=Crafty.e("Player"),Crafty.trigger("UpdateStats"),Crafty.e("Enemy"),Crafty.e("Delay").delay(function(){Crafty.e("Enemy")},2500,-1),Crafty.audio.play("background_music-01",-1,.6)}),Crafty.scene("GameOver",function(){Crafty.audio.stop("background_music-01"),Crafty.audio.play("game_over"),Crafty.e("2D, DOM, Text").text("GAME OVER").attr({x:0,y:Game.height()/2,w:Game.width()}).textFont($text_css).css({textAlign:"center"}).css($text_css)}),Crafty.scene("Loading",function(){Crafty.e("2D, DOM, Text").text("Loading...").attr({x:0,y:Game.height()/2,w:Game.width()}).textFont($text_css).css({textAlign:"center"}).css($text_css),Crafty.load(["public/images/player.png","public/music/ouroboros.mp3"],function(){Crafty.sprite("public/images/ship1.png",{spr_enemy:[0,0,63,50]}),Crafty.sprite("public/images/ship2.png",{spr_player:[0,0,63,50]}),Crafty.sprite("public/images/bullet_01.png",{spr_enemy_bullet:[0,0,9,20]}),Crafty.sprite("public/images/bullet_02.png",{spr_player_bullet:[0,0,9,20]}),Crafty.scene("Game")})});