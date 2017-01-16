ig.module(
    'game.entities.island'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityIsland = ig.Entity.extend({
    
    size: {x:320, y:280},
    type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    sfxPain: new ig.Sound('media/sound/pain.ogg'),
    sfxHit: new ig.Sound('media/sound/explodemini.ogg'),
    
    health: 5000,
    points: 1000,
    groupEntity: null,
  
    STATE: { 
    ALIVE: 0,
    DAMAGE1: 1,
    DAMAGE2: 2,
    DAMAGE3: 3,
    DAMAGE4: 4,
    EXPLODING: 5
    },
    
    animSheet: new ig.AnimationSheet('media/island.png', 320, 280),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        this.addAnim( 'damage1', 1, [1] );
        this.addAnim( 'damage2', 1, [2] );
        this.addAnim( 'damage3', 1, [3] );
        this.addAnim( 'damage4', 1, [4] );
        this.addAnim( 'dead', 1, [5] );
        
        this.stateSequence = [this.STATE.ALIVE, this.STATE.DAMAGE1, this.STATE.DAMAGE2, this.STATE.DAMAGE3, this.STATE.DAMAGE4, this.STATE.EXPLODING];
        this.currentStateNum = 0;
    
        //The probabilty the enemy will fire. Becomes more probable, the more 
        //damaged it becomes. Corresponds with state number.
           
        this.explosionTimer = new ig.Timer(4);
        },
    
        receiveDamage: function(amount, from) {
        switch(this.stateSequence[this.currentStateNum]){
        case this.STATE.ALIVE:   
          if (this.health < 4000){
            this.nextState();
            this.sfxHit.play();
            this.sfxPain.play();
          }
        break;
        case this.STATE.DAMAGE1:   
          if (this.health < 3000){
            this.nextState();
            this.sfxHit.play();
            this.sfxPain.play();
          }
          break;
        case this.STATE.DAMAGE2:   
          if (this.health < 2000){
            this.nextState();
            this.sfxHit.play();
            this.sfxPain.play();
          }
          break;
        case this.STATE.DAMAGE3:   
          if (this.health < 1000){
            this.nextState();
            this.sfxHit.play();
            this.sfxPain.play();
          }
        break;
        case this.STATE.DAMAGE4:   
          if (this.health - amount <= 0){
            //Base has been killed. Go to next state 'exploding'.
            this.nextState();
            this.sfxHit.play();
            ig.game.gameOver();
            }
        break;
        default:
        break;
    }    

		this.health -= amount;
  },

    nextState: function(){
    this.currentStateNum++;
    switch(this.stateSequence[this.currentStateNum]){
      case this.STATE.DAMAGE1:   
          this.currentAnim = this.anims.damage1;        
        break;
      case this.STATE.DAMAGE2:   
          this.currentAnim = this.anims.damage2;        
			    ig.game.spawnEntity( EntityExplosion, this.pos.x + (this.size.x/2), this.pos.y + 70);
        break;
        case this.STATE.DAMAGE3:   
          this.currentAnim = this.anims.damage3;        
			    ig.game.spawnEntity( EntityExplosion, this.pos.x + (this.size.x/2), this.pos.y + 70);
        break;
        case this.STATE.DAMAGE4:   
          this.currentAnim = this.anims.damage4;        
			    ig.game.spawnEntity( EntityExplosion, this.pos.x + (this.size.x/2), this.pos.y + 70);
        break;
      case this.STATE.EXPLODING:
       //Create initial explosions 
			ig.game.spawnEntity( EntityExplosion, this.pos.x + (this.size.x/2), this.pos.y + (this.size.y/2));
			ig.game.spawnEntity( EntityExplosion, (this.pos.x + 20 ), (this.pos.y));
			ig.game.spawnEntity( EntityExplosion, (this.pos.x + this.size.x - 20), (this.pos.y));
			ig.game.spawnEntity( EntityExplosion, (this.pos.x + 20 ), (this.pos.y +this.size.y -30));
			ig.game.spawnEntity( EntityExplosion, (this.pos.x + this.size.x - 20), (this.pos.y + this.size.y - 30));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 40 ), (this.pos.y + 20));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 80 ), (this.pos.y + 20));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 150 ), (this.pos.y + 20));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 200 ), (this.pos.y + -20));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 300 ), (this.pos.y + -50));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + 280 ), (this.pos.y + -60));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + this.size.x + - 100 ), (this.pos.y + this.size.y -50));
            ig.game.spawnEntity( EntityExplosion, (this.pos.x + this.size.x - 50 ), (this.pos.y + this.size.y -50));
        this.collides =  ig.Entity.COLLIDES.NEVER;
		    this.checkAgainst = ig.Entity.TYPE.NONE;
        this.type = ig.Entity.TYPE.NONE;
        this.vel.x = 0;
        this.vel.y = 0;
        this.explosionTimer.reset();
        
        break;
      default:
        break;
    }

  },

  update: function(){
    switch(this.stateSequence[this.currentStateNum]){
      case this.STATE.EXPLODING:
        if (this.explosionTimer.delta() > -3.7){
          this.currentAnim = this.anims.dead;  
          if (this.explosionTimer.delta() > 0){
            this.kill();
          }
        }
        break;
      }
         
        
    this.parent();
  },     
    
    
    check: function( EntityWater_droplet ) {
		EntityWater_droplet.receiveDamage( 1, this );
        this.kill();
    },       

    
  

});

});


