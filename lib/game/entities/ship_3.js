ig.module(
    'game.entities.ship_3'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_3 = ig.Entity.extend({
    
    size: {x:118, y:72},
	maxVel: {x: 100, y: 100},
	friction: {x: 1000, y: 0},
    
    
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    health: 50,
    points: 30,
        
    animSheet: new ig.AnimationSheet('media/ship_3.png', 118, 72),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.1, [0]);
          
    },
    
    receiveDamage: function(amount, from) {
    //If this enemy will be killed then spawn an explosion
    if (this.health - amount <= 0){
        ig.game.score += this.points;
      //Create explosion with coordinates of center of this entity.
			ig.game.spawnEntity( EntityExplosion, this.pos.x + (this.size.x/2), this.pos.y + +20);
    }
    this.parent(amount, from);
  },
  
    update: function() {
        
       		var island = ig.game.getEntitiesByType(EntityIsland)[0];
            if(island){
                               
                if(this.distanceTo(island) < 800 && this.distanceTo(island) > 200){
                        ig.game.spawnEntity( EntityWater_droplet, this.pos.x, this.pos.y);
                                                
                } else {
                    this.currentAnim = this.anims.idle;
                    this.vel.x = 0;
                
                }
                           
            }
        },
        
});

EntityWater_droplet = ig.Entity.extend({
	size: {x: 32, y: 24},
	offset: {x: 2, y: 2},
	maxVel: {x: -200, y: -10},
	
	// The fraction of force with which this entity bounces back in collisions
	bounciness: 0, 
	    
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    shootTimer: null,
    shootWaitTimer: null,
    canShoot: false,
		
	animSheet: new ig.AnimationSheet( 'media/water_droplet.png', 32, 24 ),
	
	bounceCounter: 0,
		
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
        
        
        this.addAnim('shoot', 0.1, [0]);
        this.addAnim('hit', 0.1, [0,1,2,3,4,5,6,7,8]);
       		
		this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
		this.vel.y = 50;
		                
	},
    
    	
	handleMovementTrace: function( res ) {
		this.parent( res );
		if( res.collision.x || res.collision.y ) {
			
			//collide once
			this.bounceCounter++;
			if( this.bounceCounter == 1 ) {
                this.kill();
			}
                      
		}
	},
    
    check: function( EntityIsland ) {
		EntityIsland.receiveDamage( 3, this );
		this.kill();
    },
        
   
    
});

});



